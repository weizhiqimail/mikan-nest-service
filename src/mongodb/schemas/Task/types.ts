import { Document } from 'mongoose';

export enum ISysTaskStatus {
  INIT = 'INIT',
  PENDING = 'PENDING',
  INTERRUPT = 'INTERRUPT',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export enum ISysTaskType {
  FFMPEG_SPLIT = 'FFMPEG_SPLIT',
  FFMPEG_MERGE = 'FFMPEG_MERGE',
}

export declare namespace TaskModelTypes {
  interface Model extends Document {
    name: string;
    description?: string;
    type: ISysTaskType;
    status: ISysTaskStatus;
    priority?: number;
    creatorId: string;
    inputData: any;
    executeResult?: any;
    failReason?: any;
    statusHistory?: Array<{
      status: ISysTaskStatus;
      time: Date;
      operatorId?: string;
    }>;
    createTime: Date;
    endTime?: Date;
    remark?: string;
  }

  interface QueryList {
    name?: string;
    description?: string;
    type?: ISysTaskType;
    priority?: number;
    executeResult?: any;
    failReason?: any;
    creatorId?: string;
    status?: ISysTaskStatus;
  }

  interface Create {
    name?: string;
    description?: string;
    type?: ISysTaskType;
    priority?: number;
    executeResult?: any;
    inputData?: any;
    failReason?: any;
    creatorId?: string;
    status?: ISysTaskStatus;
    remark?: string;
  }

  interface Update {
    name?: string;
    description?: string;
    type?: ISysTaskType;
    priority?: number;
    executeResult?: any;
    failReason?: any;
    status?: ISysTaskStatus;
    remark?: string;
  }
}
