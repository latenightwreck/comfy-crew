import { CharacterResponse, ClassJob } from '@xivapi/angular-client';
import { ClassJobData } from './class-job/class-job-data.model';
export class Character {

  public portrait: string;
  public classJobs: ClassJobData[];

  constructor(charResponse: CharacterResponse) {
    this.portrait = charResponse.Character.Portrait;

    const classJobIds = Object.keys(charResponse.Character.ClassJobs);
    const classJobs: ClassJobData[] = [];
    for (const classId of classJobIds) {
      const classJobData = new ClassJobData(charResponse.Character.ClassJobs[classId]);
      classJobs.push(classJobData);
    }
    this.classJobs = classJobs;
  }
}
