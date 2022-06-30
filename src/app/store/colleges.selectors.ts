import { College } from '../entity/college.entity';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { state } from '@angular/animations';


export interface CollegeGroup {
    college: College;
    count: number;
  }

// export const collegeList = createSelector(
//   createFeatureSelector('collegeEntries'),
//   (state: College[]) => {
//     return state
//   }
// )

export const filteredColleges = createSelector(
    createFeatureSelector('collegeEntries'),
    (state: College[]) => {
        return [...state]
      }
)

export const filterTriggered = createSelector(
  createFeatureSelector('collegeEntries'),
  (state: College[]) => {
    //console.log(state.length)
    return state.length;
  }
);
