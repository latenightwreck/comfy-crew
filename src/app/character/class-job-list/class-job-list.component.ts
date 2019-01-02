import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassJobData } from '../class-job/class-job-data.model';

@Component({
  selector: 'comfy-class-job-list',
  templateUrl: './class-job-list.component.html',
  styleUrls: ['./class-job-list.component.scss']
})
export class ClassJobListComponent implements OnInit {

  @Input() classJobList$: Observable<ClassJobData>;
  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }
}
