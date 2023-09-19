import { Task } from './task';

export interface SectionList {
  section: string;
  list?: Array<Task>;
}
