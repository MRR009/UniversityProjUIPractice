import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/service/college.service';
import { CourseService } from 'src/app/service/course.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  universityForm: any;
  collegeForm: any;
  courseForm: any;
  streamForm: any;

  newUniversity: any;
  newCollege: any;
  newCourse: any;
  newStream: any;

  constructor(
    private collegeService: CollegeService,private universityService: UniversityService,
    private streamService: StreamService,
    private courseService : CourseService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.collegeForm = new FormGroup({
      collegeCode : new FormControl('',[Validators.required]),
      collegeName : new FormControl('',[Validators.required]),
      collegeType : new FormControl('',[Validators.required]),
      collegeDescription : new  FormControl('',[Validators.required]),
      collegeImage : new FormControl('',[Validators.required]),
      collegeLogo : new FormControl('',[Validators.required]),
      establishedIn : new FormControl('0000',[Validators.required])
    })

    this.courseForm = new FormGroup({
      courseCode : new FormControl('',[Validators.required]),
      courseName : new FormControl('',[Validators.required]),
      courseFee : new FormControl('0',[Validators.required]),
      courseDuration : new  FormControl('0',[Validators.required]),
      courseType : new FormControl('',[Validators.required]),
      
    })
  }


  get courseF(){return  this.courseForm.controls}

  onSubmitCourse(){
    this.newCourse = {
      courseCode: this.courseForm.value.courseCode,
      courseName:this.courseForm.value.courseName,
      courseFee:this.courseForm.value.courseFee,
      courseDuration:this.courseForm.value.courseDuration,
      courseType:this.courseForm.value.courseType,
     
  }

  this.courseService.createCourse(this.newCourse).subscribe(
    (data) => {
      console.log(data)
      this.courseForm.reset();
      //window.location.reload();
      
    },(error)=>{
      console.log(error);

    }
  )


  }

  onSubmit(){

    if(this.collegeForm.invalid){
      alert("please provide all Fields")
      return
    }

    this.newCollege = {
        playerName: this.collegeForm.value.playerName,
        playerAge:this.collegeForm.value.playerAge,
        playerContactNo:this.collegeForm.value.playerContactNo,
        
    }
   
 
     
    this.collegeService.createCollege(this.newCollege).subscribe(
      (data) => {
        console.log(data)
        this.collegeForm.reset();
        //window.location.reload();
        
      },(error)=>{
        console.log(error);

      }
    )
  }
 
//   findGame(event : any ){
//     console.log(event.target.value)
//     this.gameService.getGameById(event.target.value).subscribe(
//       (data) => {
//         console.log(data);
//         this.coachList = data.coach;
//       }
//     )
//   }

//   findClub(event : any){
//     console.log(event.target.value)
//     this.sportClubService.getSportsClub(event.target.value).subscribe(
      
//       (data)=>{
//        this.gamesList = data.game;
       
//   }
//     )
//  }

  

}
