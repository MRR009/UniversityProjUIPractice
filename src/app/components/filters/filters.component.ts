import { Component, Input, OnInit } from '@angular/core';
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
    private streamService: StreamService
  ) {
    this.universityService.getAllUniversities().subscribe((data) => {
      this.allUni = data;
    })

    this.streamService.getAllStream().subscribe((data) => {
      this.allStreams = data;
    })

  }

  ngOnInit(): void {

  }


  onCheckboxChangeUni(e: any) {
    if (e.target.checked) {
      this.universityService
        .getCollegesInUniversity(e.target.value).subscribe((data: any) => {
          this.checkedStrmClgs.colleges.push(data[0])
          this.checkedStrmClgs.streamCode = e.target.value
          this.checkedClgs.push(this.checkedStrmClgs);
          
        }, err => console.log(err));
    } else {
      this.checkedClgs = this.checkedClgs.filter(function (obj: any) {
        return obj.universityCode !== e.target.value;
      });
      
      console.log("Unchecked")
      console.log(this.checkedClgs)

    }
  }

  onCheckboxChangeStrm(e: any) {
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