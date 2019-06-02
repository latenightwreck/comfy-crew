import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { isSameDay, isSameMonth, addHours } from 'date-fns';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'comfy-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  events$: Observable<CalendarEvent[]>;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  constructor(db: AngularFirestore) {
    this.events$ = db.collection('/events', ref =>
      ref
      .where('end', '>=', new Date())
      .limit(10))
      .snapshotChanges().pipe(
        map(events => events.map(e => {
        const data = e.payload.doc.data();
        let end = null;


        if (data['end']) {
          end = data['end'].toDate();
        }
        return {
          id: e.payload.doc.id,
          title: data['title'],
          start: data['start'].toDate(),
          end
        } as CalendarEvent;
      }))
    );

  }

  ngOnInit() {}

  async addEvent() {
    console.log('Added Event');
  }
}
