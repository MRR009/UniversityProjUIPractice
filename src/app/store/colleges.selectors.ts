import { College } from '../entity/college.entity';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';


export interface CollegeGroup {
    college: College;
    count: number;
  }

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
