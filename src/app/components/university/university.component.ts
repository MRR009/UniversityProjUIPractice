import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  submitted = false;
  
  constructor(
    private universityService: UniversityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  universityForm = new FormGroup({
    uniCode: new FormControl()
  });

  get form(){
    return this.universityForm.value
  }


spring(){
  console.log(this.form)
  this.universityService
    .getUniversity(this.form.uniCode).subscribe((data: any) => {
      console.log(data)
    }, err => console.log(err));
}



  

}
