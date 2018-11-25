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
    tanks: [1, 3, 32]
  };

  character$: Observable<Character>;
  tankClassJobs: Observable<ClassJobData[]>;

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

    this.tankClassJobs = this.character$.pipe(
      map(character => {
         return character.classJobs.filter(classJob => {
          if (this.JOB_ID.tanks.includes(classJob.classId)) {
            return classJob;
          }
        });
      })
    );
  }

  ngOnInit() {}
}
