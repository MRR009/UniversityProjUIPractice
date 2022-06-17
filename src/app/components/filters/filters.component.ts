import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { College } from 'src/app/entity/college.entity';
import { University } from 'src/app/entity/university.entity';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';
import { addCollege, removeCollege } from 'src/app/store/colleges.actions';
import { filteredColleges, filterTriggered } from 'src/app/store/colleges.selectors';
import { CollegeStore } from './college.store';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public universities$ = new Observable<University[]>();

  universityColleges$: Observable<any> | undefined;
  collegeEntries$: Observable<any> | undefined;
  filteredColleges$: Observable<any> | undefined;
  // collegesList$: Observable<any> | undefined;

  // colleges$ = this.collegeStore.colleges$;
  // currentcolleges$ = this.collegeStore.currentColleges$;

  allUni: any
  allStreams: any
  stateCount: any
  collegesList: any[] = []
  filteredColleges: any[] = []
  

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
    this.store.select(filteredColleges).subscribe({
      next: (data) => {
        this.filteredColleges = data
      }
    })

    this.store.select(filterTriggered).subscribe({
      next: (data) => {
        this.stateCount = data;
      }
    })

    console.log(this.stateCount)

  }

  ngOnInit(): void {}


  getUniversities() {
    this.universityService.getAllUniversities().subscribe((data) => {
      this.allUni = data;
      //console.log(data)
    })
  }

  getStreams() {
    this.streamService.getAllStream().subscribe((data) => {
      this.allStreams = data;
    })
  }

  getColleges() {
    this.collegeService.getAllColleges().subscribe(data => {this.collegesList = data
    //console.log(data)
    })
  }


  onCheckboxChangeUni(e: any) {
    if (e.target.checked) {
      let temp:College[]=[];
      console.log("Inside changed func")
       this.universityService.getUniversity(e.target.value).subscribe({
         next: (data) => {
          this.collegesList.forEach(college => {
            if(college.universityCode === data.universityCode){
              // console.log(college.universityCode)
              // console.log(data.universityCode)
              this.store.dispatch(addCollege(college))
            }
            
         })
         }
       })
    }
    else {
      console.log("Unchecked...Then.....")
         this.filteredColleges.forEach(college => {
           if(college.universityCode === e.target.value){
             this.store.dispatch(removeCollege(college))
           }
           
        })
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