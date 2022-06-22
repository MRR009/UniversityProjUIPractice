import { College } from '../entity/college.entity';
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { addCollege,  removeCollege } from './colleges.actions';

export const initialCollegeEntries: College[] = [];
export const filterTriggeredIni: Boolean = false;

export const collegeReducer = createReducer(
    initialCollegeEntries,
    on(addCollege, (entries, college) => {
        const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
        entriesClone.push(college);
        const val =entriesClone.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.collegeCode === value.collegeCode
        ))
      )
        return val;
    }),

    on(removeCollege, (entries, college) => {
        const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
        const found = entriesClone.find(e => e.collegeCode === college.collegeCode)
        if(found){
            entriesClone.splice(entriesClone.indexOf(found), 1)   
        }
        return entriesClone;
    })

)
