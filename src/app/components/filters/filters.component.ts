import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { College } from 'src/app/entity/college.entity';
import { University } from 'src/app/entity/university.entity';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import {  UniversityService } from 'src/app/service/university.service';
import { addCollege, removeCollege } from 'src/app/store/colleges.actions';
import { CollegesStore } from 'src/app/store/colleges.store';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public universities$ = new Observable<University[]>();

  collegeEntries$ : Observable<any> | undefined;

  allUni: any
  allStreams: any
  checkedClgs: any[] = []
  clgswithstrms: any[] = []
  strmclgs: any[] = []
  checkedStrmClgs = {
    "colleges": this.strmclgs,
    "streamCode": ""
  }

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.collegeEntries$ = new Observable();
    this.getUniversities();

    this.getStreams();

  }

  ngOnInit(): void {

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

  
  addColleges(college: College){
    this.store.dispatch(addCollege(college))
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
     this.getCollegesInUniversities(e.target.value);
     console.log(this.getCollegesInUniversities(e.target.value))
      
    } else {
      console.log("Unchecked")
    }
  }

  onCheckboxChangeStrm(e: any) {
    this.streamService.changeStrmCode(e.target.value)
    if (e.target.checked) {
      this.streamService
        .getCollegesWithStream(e.target.value).subscribe((data: any) => {
         this.checkedStrmClgs.colleges.push(data[0])
          console.log(this.checkedStrmClgs.colleges)
          this.checkedStrmClgs.streamCode = e.target.value
          this.checkedClgs.push(this.checkedStrmClgs);
          
        }, err => console.log(err));
    } else {
      
      this.checkedClgs.filter((obj : any) => {
        return obj.streamCode != e.target.value
      })

      this.checkedClgs.map((clgStrm:any) => {
        console.log(clgStrm.college)
      })
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
 */