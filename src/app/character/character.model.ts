import { CharacterResponse, ClassJob } from '@xivapi/angular-client';
export class Character {

  static JOB_ID = {
    tanks: [1, 3, 32]
  };

  public portrait: string;
  public classJobs: ClassJob[];


  constructor(charResponse: CharacterResponse) {
    this.portrait = charResponse.Character.Portrait;

    const classJobIds = Object.keys(charResponse.Character.ClassJobs);
    const classJobs: ClassJob[] = [];
    for (const classId of classJobIds) {
      classJobs.push(charResponse.Character.ClassJobs[classId]);
    }
    this.classJobs = classJobs;
  }
}
