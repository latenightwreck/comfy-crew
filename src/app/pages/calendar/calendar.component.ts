import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { isSameDay, isSameMonth, addHours } from 'date-fns';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { trigger, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment'

declare var $: any;

@Component({
  selector: 'comfy-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('savedEventSuccess', [
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  events$: Observable<CalendarEvent[]>;
  addEventForm: FormGroup;

  options = {
    format: 'MMMM DD, YYYY, h:mm a',
    minDate: this.viewDate,
    stepping: 15,
    debug: true
  };

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

  constructor(public db: AngularFirestore, fb: FormBuilder) {
    this.addEventForm = fb.group({
      titleInput: null,
      startInput: addHours(new Date(), 1),
      endInput: addHours(new Date(), 2)

    });

    this.events$ = this.db.collection('/events', ref =>
      ref
      .where('end', '>=', new Date())
      .limit(10))
      .snapshotChanges().pipe(
        map(events => events.map(e => {
        const data = e.payload.doc.data();

        return {
          id: e.payload.doc.id,
          title: data['title'],
          start: data['start'].toDate(),
          end: data['end'].toDate()
        } as CalendarEvent;
      }))
    );

  }

  ngOnInit() {
  }

  async addEvent() {
    const newEvent = {
      title: this.addEventForm.value.titleInput,
      start: moment(this.addEventForm.value.startInput).toDate(),
      end: moment(this.addEventForm.value.endInput).toDate()
    } as CalendarEvent;
    await this.db.collection('/events').add(
      newEvent
    );

    $('#addEventModal').modal('hide');
    this.addEventForm.reset({startInput: addHours(new Date(), 1),
      endInput: addHours(new Date(), 2)});
  }

  async saveEvent() {
    // TODO validate data exists
    // await this.db.collection('/events').add(
    //   this.newEvent
    // );
  }
}
