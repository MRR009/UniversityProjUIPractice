import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';
import { filteredColleges } from 'src/app/store/colleges.selectors';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  colleges$ : Observable<any> | undefined;
  filteredColleges$ : Observable<any> | undefined;

  filteredColleges :any[] = []
  colleges : any[]= []

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService,
    private route: ActivatedRoute,
    private store: Store

  ) { 
    this.getColleges();
    this.store.select(filteredColleges).subscribe((data: any) => {
      this.filteredColleges = data
    }
    )
  }

  ngOnInit(): void {
    console.log(this.filteredColleges)
    console.log(this.colleges$?.subscribe(data => console.log(data)))
  }

  getColleges(){
    this.colleges$ = this.collegeService.getAllColleges()
  }



}
