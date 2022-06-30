import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { College } from 'src/app/entity/college.entity';
import { University } from 'src/app/entity/university.entity';
import { AddressService } from 'src/app/service/address.service';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';
import { addCollege, removeCollege } from 'src/app/store/colleges.actions';
import { filteredColleges, filterTriggered } from 'src/app/store/colleges.selectors';


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
  getAllAddresses$: Observable<any> | undefined;
  filtCollgs$: Observable<any> | undefined;

  // collegesList$: Observable<any> | undefined;

  // colleges$ = this.collegeStore.colleges$;
  // currentcolleges$ = this.collegeStore.currentColleges$;

  allUni: any
  allStreams: any
  stateCount: any
  collegesList: any[] = []
  filteredColleges: any[] = []
  checkedStreams: any[] = []
  checkedUniversities: any[] = []

  
  public routerLinkVariable = "/college";

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
    //private collegeStore: CollegeStore
  ) {
    this.collegeEntries$ = new Observable();
    this.getUniversities();
    this.getStreams();
    this.getColleges();
    this.getAddresses();
    this.store.select(filteredColleges).subscribe({
      next: (data) => {
      this.filteredColleges = data
      }
    })

    this.filteredColleges.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
  })

    this.store.select(filterTriggered).subscribe({
      next: (data) => {
        this.stateCount = data;
      }
    })
    //console.log(this.stateCount)
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
     
  });
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
    this.collegeService.getAllColleges().subscribe(data => {this.collegesList = data
   
    })
  }

  getAddresses(){
    return this.getAllAddresses$ = this.addressService.getAllAddress()
  }


  onCheckboxChangeUni(e: any) {
    if (e.target.checked) {
      this.checkedUniversities.push(e.target.value) 
      this.universityService.getCollegesInUniversities(this.checkedUniversities).subscribe(data => {
        console.log("flter Componet")
        this.collegeService.setCollegeList(data);

        
      }
)
    }
    else {
      var index = this.checkedUniversities.indexOf(e.target.value);
      this.checkedUniversities.splice(index, 1);
      this.universityService.getCollegesInUniversities(this.checkedUniversities).subscribe(data => {
        console.log("filter Component")
        this.collegeService.setCollegeList(data);
        
        
      })
    }
  }

  onCheckboxChangeStrm(e: any) {
    if (e.target.checked) {
      this.checkedStreams.push(e.target.value) 
      this.streamService.getCollegesWithStreams(this.checkedStreams).subscribe(data => {
        console.log("flter Componet")
        this.collegeService.setCollegeList(data);

        
      }
)
    } else{
      var index = this.checkedStreams.indexOf(e.target.value);
      this.checkedStreams.splice(index, 1);
      this.streamService.getCollegesWithStreams(this.checkedStreams).subscribe(data => {
        console.log("filter Component")
        this.collegeService.setCollegeList(data);
        
        
      })
    }
  }
}



// this.streamService.changeStrmCode(e.target.value)
// if (e.target.checked) {
//   console.log(this.filteredColleges)
//   console.log("Inside changed func")
//         this.streamService.getCollegesWithStream(e.target.value).subscribe(data =>{
//           data.forEach((element:any) => {
//               this.store.dispatch(addCollege(element))
//           });
//         })
// } else {
//   console.log("Unchecked...Then.....")
//   this.streamService.getCollegesWithStream(e.target.value).subscribe(data =>{
//     data.forEach((element:any) => {
//       this.store.dispatch(removeCollege(element))
//     });
//   })
// }


// this.universityService.getUniversity(e.target.value).subscribe({
//   next: (data) => {
//    this.collegesList.forEach(college => {
//      if(college.universityCode === data.universityCode){
//        // console.log(college.universityCode)
//        // console.log(data.universityCode)
//        this.store.dispatch(addCollege(college))
//      }

// this.filteredColleges.forEach(college => {
//   if(college.universityCode === e.target.value){
//     this.store.dispatch(removeCollege(college))
//   }
  
// })

// console.log("Inside changed func")
// this.universityService.getCollegesInUniversity(e.target.value).subscribe(data =>{
//   data.forEach((element:any) => {
//         this.store.dispatch(addCollege(element))
//   });
// })


// console.log("Unchecked...Then.....")
//       this.universityService.getCollegesInUniversity(e.target.value).subscribe(data =>{
//         data.forEach((element:any) => {
//           this.store.dispatch(removeCollege(element))
//         });
//       })



