import { College } from '../entity/college.entity';
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { addCollege, removeCollege } from './colleges.actions';

export const initialCollegeEntries: College[] = [];

export const collegeReducer = createReducer(
    initialCollegeEntries,
    on(addCollege, (entries, college) => {
        const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
        entriesClone.push(college);
        console.log(entriesClone)
        return entriesClone;
    }),

    on(removeCollege, (entries, college) => {
        const entriesClone: College[] = JSON.parse(JSON.stringify(entries));
        const found = entriesClone.find(e => e.collegeCode = college.collegeCode)
        const index = entriesClone.findIndex(x => x.collegeCode == college.collegeCode);
            console.log(index)
        if(found){
            
            entriesClone.splice(entriesClone.findIndex(x => x.collegeCode ===college.collegeCode), 1)
        }
        return entriesClone;
    })
)
