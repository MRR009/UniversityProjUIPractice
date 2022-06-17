import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cucollege',
  templateUrl: './cucollege.component.html',
  styleUrls: ['./cucollege.component.scss']
})
export class CucollegeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.createCollegetForm=new FormGroup({
    //   patientName:new FormControl('',[Validators.required]),
    //   patientGender:new FormControl('',[Validators.required]),
    //   patientAge:new FormControl('',[Validators.required]),
    //   patientBloodGroup:new FormControl('',[Validators.required]),
    //   patientMobileNumber:new FormControl('',[Validators.required]),
    //   patientLocation:new FormControl('',[Validators.required]),
    //   admittedDate:new FormControl('',[Validators.required])
    // })
  }

  // get f(){
  //   //return this.createPatientForm.controls
  // }

  onSubmit(){
    // if(this.createPatientForm.valid){
    //   this.patientservice.addPatient(this.createPatientForm.value).subscribe((result)=>
    // {
    //   this.mobileNumber=this.createPatientForm.value.patientMobileNumber;
    //   Swal.fire("Patient added","","success");
    //   this.createPatientForm.reset();
    // },
    // (error)=>{
    //   console.log("Something went wrong please enter a valid details");
    // })
    // }
    // else{
    //   alert("Some fields are empty plz check once");
    // }
  }

}
