import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  allUni: any
  allColleges: any
  allStreams: any
  checkedClgs: any[] = []

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService
   ) {
     this.universityService.getAllUniversities().subscribe((data) => {
     this.allUni = data;
  })

    this.collegeService.getAllColleges().subscribe((data) => {
      this.allColleges = data;
    })

    this.streamService.getAllStream().subscribe((data) => {
      this.allStreams = data;
    })

}

  ngOnInit(): void {
    
  }


  onCheckboxChangeUni(e:any){
    if (e.target.checked) {
      this.universityService
    .getCollegesInUniversity(e.target.value).subscribe((data: any) => {
      this.checkedClgs.push(data)
      console.log(this.checkedClgs)
    }, err => console.log(err));
    } else {
    //   this.checkedClgs = this.checkedClgs.filter(function( obj:any ) {
    //     return obj.universityCode !== e.target.value;
    // });
      console.log("Unchecked")
    }
  }

  onCheckboxChangeStrm(e:any){
    if (e.target.checked) {
    this.streamService
    .getCollegesWithStream(e.target.value).subscribe((data: any) => {
      this.checkedClgs.push(data)
      console.log(this.checkedClgs)
    }, err => console.log(err));
    } else {
    //   this.checkedClgs = this.checkedClgs.filter(function( obj:any ) {
    //     return obj.streamCode !== e.target.value;
    // });
      console.log("Unchecked")
    }
  }

}
