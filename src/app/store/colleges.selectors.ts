import { College } from '../entity/college.entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const filteredColleges = createSelector(
    createFeatureSelector('collegeEntries'),
    (state: College[]) => {
        
        
    }
)