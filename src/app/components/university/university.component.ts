import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  universityForm: any = FormGroup ;
  submitted = false;
  uniCode = "AU";
  constructor(
    private universityService: UniversityService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  spring(){
    this.universityService
      .getUniversity(this.uniCode).subscribe((data: any) => {
        console.log(data)
      }, err => console.log(err));
  }


  

}
