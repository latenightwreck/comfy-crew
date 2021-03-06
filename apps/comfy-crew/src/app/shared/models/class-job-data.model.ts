import { ClassJob } from '@xivapi/angular-client';

export class ClassJobData {

  public classId: number;
  public jobId: number;
  public level: number;
  public expLevel: number;
  public expLevelMax: number;
  public classImg;
  public jobImg;
  public className: string;
  public jobName: string;
  // This value ifs for the progress bar
  // it is based on a percentage
  public levelProgress: number;

  constructor(apiClassJob: ClassJob) {
    this.classId = apiClassJob.ClassID;
    this.jobId = apiClassJob.JobID;
    this.level = apiClassJob.Level;
    this.expLevel = apiClassJob.ExpLevel;
    this.expLevelMax = apiClassJob.ExpLevelMax;
    this.jobName = this.JOB_NAME[this.jobId];

    if (this.level !== 0 && this.expLevelMax === 0) {
      this.levelProgress = 100;
    } else {
      this.levelProgress = (this.expLevel / this.expLevelMax) * 100;
    }
  }

  JOB_NAME = {
   19: 'paladin',
   21: 'warrior',
   32: 'dark knight',
   24: 'white mage',
   28: 'scholar',
   33: 'astrologian'
  };

}
