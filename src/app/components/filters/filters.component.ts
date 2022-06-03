import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { College } from 'src/app/entity/college.entity';
import { University } from 'src/app/entity/university.entity';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import {  UniversityService } from 'src/app/service/university.service';
import { addCollege, removeCollege } from 'src/app/store/colleges.actions';
import { filteredColleges } from 'src/app/store/colleges.selectors';
import { CollegeStore } from './college.store';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public universities$ = new Observable<University[]>();

  collegeEntries$ : Observable<any> | undefined;
  filteredColleges$ : Observable<any> | undefined;
  // collegesList$: Observable<any> | undefined;

  // colleges$ = this.collegeStore.colleges$;
  // currentcolleges$ = this.collegeStore.currentColleges$;

  allUni: any
  allStreams: any
  checkedClgs: any[] = []
  collegesList : any[] = []

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService,
    private route: ActivatedRoute,
    private store: Store
    //private collegeStore: CollegeStore
  ) {
    this.collegeEntries$ = new Observable();
    this.getUniversities();
    this.getStreams();
    this.getColleges();
    this.filteredColleges$ = store.select(filteredColleges)
  }

  ngOnInit(): void {
    this.filteredColleges$ = this.store.select(filteredColleges)
  }


  getUniversities(){
    this.universityService.getAllUniversities().subscribe((data)=> {
      this.allUni = data;
    })
  }

  getStreams(){
    this.streamService.getAllStream().subscribe((data) => {
      this.allStreams = data;
    })
  }



getColleges(){
    this.collegeService.getAllColleges().subscribe(data => this.collegesList = data)
}


getCollegesInUniversities(uniCode : String): College[]{
  this.universityService
  .getCollegesInUniversity(uniCode).subscribe((data: any) => {
    this.checkedClgs = data;
  })
  return this.checkedClgs;
}

  onCheckboxChangeUni(e: any) {
    if (e.target.checked) {
     this.getCollegesInUniversities(e.target.value).map(college => this.store.dispatch(addCollege(college)))
     console.log(this.filteredColleges$)
    } 
    else{
      this.getCollegesInUniversities(e.target.value).map(college => this.store.dispatch(removeCollege(college)))
      console.log(this.filteredColleges$)
      
    }
  }

  onCheckboxChangeStrm(e: any) {
    this.streamService.changeStrmCode(e.target.value)
    if (e.target.checked) {
          console.log("checked")
    } else {
      console.log("unchecked") 
    }

  }

}


/**
  this.streamService.getCollegesWithStream(e.target.value).subscribe((data: any) => {
        data.forEach((element: any) => {
          if (this.clgswithstrms.includes(element.collegeCode) == false) {
            this.clgswithstrms.push(element.collegeCode)
          }

        });
      })
      let newData = this.clgswithstrms
      console.log("newData.forEach(element => { return element })")
      this.clgswithstrms.forEach(element => { console.log(element) })
      console.log("newData.forEach(element => { return element })")
      console.log(this.clgswithstrms)

      console.log(newData.forEach(element => { return element }))
        return obj.streamCode !== newData.forEach(element => { console.log(element) });

          
  addColleges(college: College){
    this.store.dispatch(addCollege(college))
}
 */