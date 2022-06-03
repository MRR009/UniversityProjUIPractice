import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { College } from "src/app/entity/college.entity";


export interface collegesState {
    collection: College[];
    currentCollegeCode: String | null;
}

export const initialState: collegesState = {
    collection: [],
    currentCollegeCode: null
}

@Injectable()
export class CollegeStore extends ComponentStore<collegesState>{
    colleges$ = this.select(state => state.collection);
    currentCollegeCode$ = this.select(state => state.currentCollegeCode);
    currentColleges$ = this.select(
        this.colleges$,
        this.currentCollegeCode$,
        (colleges, clgCode) => colleges.find(clg => clg.collegeCode === clgCode)
    );

    constructor(){
        super(initialState);
    }

    addCollege(college: College){
        this.setState(state => {
            return {
                ...state,
                collection: [...state.collection, college]
            }
        })
    }

    selectCollege(collegeCode: String | null){
        this.patchState({
            currentCollegeCode: collegeCode
        })
    }

    updateCollege = this.updater((state: collegesState, college: College)=> {
        return {
            ...state,
            collection:state.collection.map(clg => {
                if(college.collegeCode = clg.collegeCode){
                    return college
                }
                return clg;
            })
        }
    })

    deleteCollege = this.updater((state: collegesState, collegeCode: String)=> {
        return {
            ...state,
            collection: state.collection.filter(clg => {
                if(clg.collegeCode === collegeCode){
                    return false
                }
                return true;
            })
        }
    })
}

