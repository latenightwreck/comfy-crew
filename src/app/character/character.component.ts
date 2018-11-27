import { Character } from './character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { ClassJobData } from './class-job/class-job-data.model';

@Component({
  selector: 'comfy-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  JOB_ID = {
    tanks: ['119', '321', '3232'],
    healers: ['624', '2628', '3333'],
    rangedPhys: ['523', '3131']
  };

  character$: Observable<Character>;
  tankClassJobs$: Observable<ClassJobData[]>;
  healerClassJobs$: Observable<ClassJobData[]>;
  rangedPhysClassJobs$: Observable<ClassJobData[]>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this.character$ = this.route.paramMap.pipe(
      map(params => +params.get('id')),
      switchMap(id =>
        this.characterService.getCharacter(id).pipe(
          shareReplay(1)
        )
      )
    );

    this.tankClassJobs$ = this.filterClassJobByType('tanks');
    this.healerClassJobs$ = this.filterClassJobByType('healers');
    this.rangedPhysClassJobs$ = this.filterClassJobByType('rangedPhys');
  }

  ngOnInit() {}

  filterClassJobByType(classType: string): Observable<ClassJobData[]> {
    return this.character$.pipe(
      map(character => {
         return character.classJobs.filter(classJob => {
          if (this.JOB_ID[classType].includes(classJob.classJobId)) {
            return classJob;
          }
        }).sort((a, b) => {
          return a.classId - b.classId;
        });
      })
    );
  }
}
