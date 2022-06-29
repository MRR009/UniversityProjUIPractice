import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegeService } from 'src/app/service/college.service';

@Component({
  selector: 'college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.scss']
})
export class CollegeDetailsComponent implements OnInit {

  college$ : Observable<any> | undefined;

  bgImage: String = ""
  collegeDesc: String = ""

  constructor(private collegeServie: CollegeService) { 

    this.college$ = collegeServie.getcollege(collegeServie.selectedClgCode)

    this.college$.subscribe(data => {this.bgImage = data.collegeImage, this.collegeDesc = data.collegeDescription})
  }

  ngOnInit(): void {
  }



}
