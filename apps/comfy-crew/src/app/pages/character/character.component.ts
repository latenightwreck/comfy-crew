import { Character } from '../../shared/models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterService } from '../../core/services/character.service';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { ClassJobData } from '../../shared/models/class-job-data.model';

@Component({
  selector: 'comfy-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  JOB_ID = {
    tanks: [19, 21, 32, 37],
    healers: [24, 28, 33],
    melee: [30, 20, 34, 22],
    physicalRanged: [23, 31, 38],
    magicRanged: [35, 27, 25, 36]
  };

  character$: Observable<Character>;
  tankClassJobs$: Observable<ClassJobData[]>;
  healerClassJobs$: Observable<ClassJobData[]>;
  meleeClassJobs$: Observable<ClassJobData[]>;
  physicalRangedClassJobs$: Observable<ClassJobData[]>;
  magicClassJobs$: Observable<ClassJobData[]>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this.character$ = this.route.paramMap.pipe(
      map(params => +params.get('id')),
      switchMap(id =>
        this.characterService.getCharacter(id)
      ),
      shareReplay(1)
    );

    this.tankClassJobs$ = this.filterClassJobByType('tanks');
    this.healerClassJobs$ = this.filterClassJobByType('healers');
    this.meleeClassJobs$ = this.filterClassJobByType('melee');
    this.physicalRangedClassJobs$ = this.filterClassJobByType('physicalRanged');
    this.magicClassJobs$ = this.filterClassJobByType('magicRanged');
  }

  ngOnInit() {}

  filterClassJobByType(classType: string): Observable<ClassJobData[]> {
    return this.character$.pipe(
      map(character => {
        return character.classJobs
        .filter(classJob => {
            if (this.JOB_ID[classType].includes(classJob.jobId)) {
              return classJob;
            }
          })
          .sort((a, b) => {
            return a.classId - b.classId;
          });
      })
    );
  }
}
