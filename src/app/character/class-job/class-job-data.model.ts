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

  constructor(apiClassJob: ClassJob) {
    this.classId = apiClassJob.ClassID;
    this.jobId = apiClassJob.JobID;
    this.level = apiClassJob.Level;
    this.expLevel = apiClassJob.ExpLevel;
    this.expLevelMax = apiClassJob.ExpLevelMax;
  }

}
