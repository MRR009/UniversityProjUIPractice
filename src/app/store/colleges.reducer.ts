import { College } from '../entity/college.entity';
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { addCollege, removeCollege, addCollegesList } from './colleges.actions';

export const initialCollegeEntries: College[] = [];
export const filterTriggeredIni: Boolean = false;

export const collegeReducer = createReducer(
  initialCollegeEntries,
  on(addCollege, (entries, college) => {
    const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(college);
    return entriesClone;
  }),

  on(removeCollege, (entries, college) => {
    const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.collegeCode === college.collegeCode)
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  }),

  on(addCollegesList, (entries, college) => {
    const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
    entriesClone.splice(0, entriesClone.length)
    entriesClone.push(college);

    return entriesClone;
  })

)
