import { createAction, props } from '@ngrx/store';
import { College } from '../entity/college.entity';

export const addCollege = createAction("Add College", props<College>());
export const removeCollege = createAction("Remove College", props<College>());
export const addCollegesList = createAction("Add Colleges", props<College>());
