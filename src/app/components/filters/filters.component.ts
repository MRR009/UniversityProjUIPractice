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
import { filteredColleges } from 'src/app/store/colleges.selectors';
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
  checkedClgs: any[] = []
  collegesList: any[] = []
  filteredColleges: any[] = []
  universityColleges: any[] = []
  streamColleges : any[] = []
  tempColleges: any[] = []
  tempUni: any

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
        //console.log("Inside Constructor")
        //console.log(this.filteredColleges)
      }

    })



  }

  ngOnInit(): void {
  
  }


  getUniversities() {
    this.universityService.getAllUniversities().subscribe((data) => {
      this.allUni = data;
    })
  }

  getStreams() {
    this.streamService.getAllStream().subscribe((data) => {
      this.allStreams = data;
    })
  }

  getColleges() {
    this.collegeService.getAllColleges().subscribe(data => this.collegesList = data)
  }


  getCollegesInUniversities(uniCode: String) {
    this.universityService.getCollegesInUniversity(uniCode).subscribe(data => this.universityColleges = data)
  }



  onCheckboxChangeUni(e: any) {
    if (e.target.checked) {
      let temp:College[]=[];
      console.log("Inside changed func")
       this.universityService.getUniversity(e.target.value).subscribe({
         next: (data) => {
          this.collegesList.forEach(college => {
            if(college.universityCode === data.universityCode){
              
              this.store.dispatch(addCollege(college))
            }
            
         })
         }
       })
    }
    else {
      //this.getCollegesInUniversities(e.target.value).map(college => this.store.dispatch(removeCollege(college)))
      console.log("Unchecked...Then.....")
      console.log(e.target.value)
      this.universityService.getUniversity(e.target.value).subscribe({
        next: (data) => {
         this.filteredColleges.forEach(college => {
           if(college.universityCode === data.universityCode){
             
             this.store.dispatch(removeCollege(college))
           }
           
        })
        }
      })
      //console.log(this.filteredColleges)
      
      //console.log(this.filteredColleges)
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


// this.tempColleges = this.collegesList.filter(college => (
        //     college.universityCode === data.universityCode
        //   ))


//this.getCollegesInUniversities(e.target.value)
      //console.log("Inside changed func")
      //this.universityColleges.forEach(college => this.store.dispatch(addCollege(college)))
      //this.universityService.getCollegesInUniversity(e.target.value).subscribe(data => this.store.dispatch(addCollege(data)))
      // this.universityService.getCollegesInUniversity(e.target.value).subscribe(data => {
      //   this.store.dispatch(addCollege(data[0]))
      //   console.log(data)
      // })
      //console.log(this.universityColleges)
      // .pipe(
      //   tap(data =>
      //   console.log('All: ' + JSON.stringify(data)))
      // );
      
      //console.log(this.filteredColleges)