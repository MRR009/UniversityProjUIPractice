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

  courseUpdateForm: any;
  collegeUpdateForm: any;
  universityUpdateForm: any;
  streamUpdateForm: any;

  courseType = ["DEGREE", "DIPLOMA", "CERTIFICATION"]
  courseDetails = ["courseCode", "courseName","courseFee", "courseDuration", "courseType"]
  collegeDetails = ["collegeCode","collegeName", "collegeDescription", "collegeImage", "collegeLogo", "establishedIn","collegeLink"]
  univeristyDetails = ["universityCode", "universityName", "establishedIn"]
  streamDetails = ["streamCode", "streamName"]

  selectOptionValue: any
  selectOptionValue2: any

  clgSelectOptionValue: any;
  clgSelectOptionValue2: any;

  uniSelectOptionValue: any;
  uniSelectOptionValue2: any;

  strSelectOptionValue: any;
  strSelectOptionValue2: any;

  newUniversity: any;
  newCollege: any;
  newCourse: any;
  newStream: any;

  gotCourse:any;
  gotCollege: any;
  gotUniversity: any;
  gotStream: any;

  updateOPCourse: any
  updateOPCollege:any;
  updateOPUniversity: any;
  updateOPStream: any;

  constructor(
    private collegeService: CollegeService,
    private universityService: UniversityService,
    private streamService: StreamService,
    private courseService : CourseService,
    private router: Router
) { }

  ngOnInit(): void {
    this.collegeForm = new FormGroup({
      collegeCode : new FormControl('',[Validators.required]),
      collegeName : new FormControl('',[Validators.required]),
      collegeType : new FormControl('0',[Validators.required]),
      collegeDescription : new  FormControl('',[Validators.required]),
      collegeImage : new FormControl('',[Validators.required]),
      collegeLogo : new FormControl('',[Validators.required]),
      establishedIn : new FormControl('0000',[Validators.required]),
      collegeLink: new FormControl('',[Validators.required])
    })

    this.courseForm = new FormGroup({
      courseCode : new FormControl('',[Validators.required]),
      courseName : new FormControl('',[Validators.required]),
      courseFee : new FormControl('0',[Validators.required]),
      courseDuration : new  FormControl('0',[Validators.required]),
      courseType : new FormControl('0',[Validators.required]),
      
    })

    this.courseUpdateForm = new FormGroup({
      courseName : new FormControl('',[Validators.required]),
      selectOption : new FormControl('',[Validators.required]),
      existing : new FormControl('',[Validators.required]),
      updatingValue : new FormControl('',[Validators.required]),
    })

    this.collegeUpdateForm = new FormGroup({
      collegeName : new FormControl('',[Validators.required]),
      selectOption : new FormControl('',[Validators.required]),
      existing : new FormControl('',[Validators.required]),
      updatingValue : new FormControl('',[Validators.required]),
    })



    this.streamForm = new FormGroup({
      streamCode : new FormControl('',[Validators.required]),
      streamName : new FormControl('',[Validators.required])
      
    })

    this.universityForm = new FormGroup({
      universityCode : new FormControl('',[Validators.required]),
      universityName : new FormControl('',[Validators.required]),
      establishedIn : new FormControl('0000',[Validators.required]),
      
      
    })

    this.universityUpdateForm = new FormGroup({
      universityName : new FormControl('',[Validators.required]),
      selectOption : new FormControl('',[Validators.required]),
      existing : new FormControl('',[Validators.required]),
      updatingValue : new FormControl('',[Validators.required]),
    })

    this.streamUpdateForm = new FormGroup({
      streamName : new FormControl('',[Validators.required]),
      selectOption : new FormControl('',[Validators.required]),
      existing : new FormControl('',[Validators.required]),
      updatingValue : new FormControl('',[Validators.required]),
    })


  }

  get courseF(){return  this.courseForm.controls}
  get courseF2(){return  this.courseUpdateForm.controls}

  get collegeF(){return this.collegeForm.controls}
  get collegeF2(){return this.collegeUpdateForm.controls}

  get universityF(){return this.universityForm.controls}
  get universityF2(){return this.universityUpdateForm.controls}

  get streamF(){return this.streamForm.controls}
  get streamF2(){return this.streamUpdateForm.controls}

  /**        Course   */

  onSubmitCourse(){
    this.newCourse = {
      courseCode: this.courseForm.value.courseCode,
      courseName:this.courseForm.value.courseName,
      courseFee:this.courseForm.value.courseFee,
      courseDuration:this.courseForm.value.courseDuration,
      courseType:this.courseForm.value.courseType,
  }

  // console.log(this.newCourse)

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

  onSubmitCourseUpdate(updatingValue:any){
 
  if(this.selectOptionValue == "courseCode"){
    this.courseService.updateCourseCode(this.courseUpdateForm.value.courseName, this.courseUpdateForm.value.updatingValue).subscribe()
  } else if(this.selectOptionValue == "courseName"){
    this.courseService.updateCourseName(this.courseUpdateForm.value.courseName, this.courseUpdateForm.value.updatingValue).subscribe()
  } else if(this.selectOptionValue == "courseFee"){
    this.courseService.updateCourseFee(this.courseUpdateForm.value.courseName, this.courseUpdateForm.value.updatingValue).subscribe()
  } else if(this.selectOptionValue == "courseDuration"){
    this.courseService.updateCourseDuration(this.courseUpdateForm.value.courseName, this.courseUpdateForm.value.updatingValue).subscribe()
  } else if(this.selectOptionValue == "courseType"){
    this.courseService.updateCourseType(this.courseUpdateForm.value.courseName, this.courseUpdateForm.value.updatingValue).subscribe()
  }

  }

  getCourse(courseName: String){
    console.log(courseName)
    this.courseService.readCourseByName(courseName).subscribe(data => {this.updateOPCourse = data
    console.log(this.updateOPCourse)
    })
  }

  onChange(value: any) {
    this.selectOptionValue = value
    
    if(value == "courseCode"){
      this.selectOptionValue2 = this.updateOPCourse.courseCode
    } else if(value == "courseName"){
      this.selectOptionValue2 = this.updateOPCourse.courseName
    } else if(value == "courseFee"){
      this.selectOptionValue2 = this.updateOPCourse.courseFee
    } else if(value == "courseDuration"){
      this.selectOptionValue2 = this.updateOPCourse.courseDuration
    } else if(value == "courseType"){
      this.selectOptionValue2 = this.updateOPCourse.courseType
    }

    console.log(this.selectOptionValue)
}

/**        College   */

  onSubmitCollege(){
    console.log(this.newCollege)
    this.newCollege = {
        collegeCode: this.collegeForm.value.collegeCode,
        collegeName:this.collegeForm.value.collegeName,
        collegeType:this.collegeForm.value.collegeType,
        collegeDescription:this.collegeForm.value.collegeDescription,
        collegeImage:this.collegeForm.value.collegeImage,
        collegeLogo:this.collegeForm.value.collegeLogo,
        establishedIn:this.collegeForm.value.establishedIn,
        collegeLink:this.collegeForm.value.collegeLink,
        
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

  getCollege(collegeName: String){
    console.log(collegeName)
    this.collegeService.getcollegeByName(collegeName).subscribe(data => {this.updateOPCollege = data
      console.log(this.updateOPCollege)
      })
  }

  onChangeCollege(value:any){

    console.log(value)
    this.clgSelectOptionValue = value

    if(value == "collegeCode"){
      this.clgSelectOptionValue2 = this.updateOPCollege.courseCode
    } else if(value == "collegeName"){
      this.clgSelectOptionValue2 = this.updateOPCollege.courseName
    } else if(value == "collegeDescription"){
      this.clgSelectOptionValue2 = this.updateOPCollege.collegeDescription
    } else if(value == "collegeImage"){
      this.clgSelectOptionValue2 = this.updateOPCollege.collegeImage
    } else if(value == "collegeLogo"){
      this.clgSelectOptionValue2 = this.updateOPCollege.collegeLogo
    }  else if(value == "establishedIn"){
      this.clgSelectOptionValue2 = this.updateOPCollege.establishedIn
    }  else if(value == "collegeLink"){
      this.clgSelectOptionValue2 = this.updateOPCollege.collegeLink
    }
  }
 
  onSubmitCollegeUpdate(updatingValue:any){
    if(this.clgSelectOptionValue == "collegeCode"){
      this.collegeService.updateCollegeCode(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "collegeName"){
      this.collegeService.updateCollegeName(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "collegeDescription"){
      this.collegeService.updateCollegeDescription(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "collegeImage"){
      this.collegeService.updateCollegeImage(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "collegeLogo"){
      this.collegeService.updateCollegeLogo(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "establishedIn"){
      this.collegeService.updateCollegeEst(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    } else if(this.clgSelectOptionValue == "collegeLink"){
      this.collegeService.updateCollegeLink(this.collegeUpdateForm.value.collegeName, this.collegeUpdateForm.value.updatingValue).subscribe()
    }
  
  }

/**        University   */
onSubmitUniversity(){
  this.newUniversity = {
    universityCode: this.universityForm.value.universityCode,
    universityName:this.universityForm.value.universityName,
    establishedIn:this.universityForm.value.establishedIn,
  }

  this.universityService.createUniversity(this.newUniversity).subscribe(
    (data) => {
      console.log(data)
      this.universityForm.reset();
      //window.location.reload();
      
    },(error)=>{
      console.log(error);

    }
  )

}

getUniversity(universityName: String){
  console.log(universityName)
    this.universityService.getUniversityByName(universityName).subscribe(data => {this.updateOPUniversity = data
      console.log(this.updateOPUniversity)
      })
}

onChangeUniversity(value:any){
  console.log(value)
  this.uniSelectOptionValue = value

    if(value == "universityCode"){
      this.uniSelectOptionValue2 = this.updateOPUniversity.universityCode
    } else if(value == "universityName"){
      this.uniSelectOptionValue2 = this.updateOPUniversity.universityName
    } else if(value == "establishedIn"){
      this.uniSelectOptionValue2 = this.updateOPUniversity.establishedIn
    } 
}

onSubmitUniversityUpdate(updatingValue:any){
  
  if(this.uniSelectOptionValue == "universityCode"){
    this.universityService.updateUniversityCode(this.universityUpdateForm.value.universityName, this.universityUpdateForm.value.updatingValue).subscribe()
  } else if(this.uniSelectOptionValue == "universityName"){
    this.universityService.updateUniversityName(this.universityUpdateForm.value.universityName, this.universityUpdateForm.value.updatingValue).subscribe()
  } else if(this.uniSelectOptionValue == "establishedIn"){
    this.universityService.updateUniversityEst(this.universityUpdateForm.value.universityName, this.universityUpdateForm.value.updatingValue).subscribe()
  }
}

/**        Stream     */

onSubmitStream(){
  this.newStream = {
    streamCode: this.streamForm.value.streamCode,
    streamName:this.streamForm.value.streamName,
  }
    this.streamService.createStream(this.newStream).subscribe(
      (data) => {
        console.log(data)
        this.streamForm.reset();
        //window.location.reload();
        
      },(error)=>{
        console.log(error);
  
      }
    )
}

getStream(streamName: String){
  console.log(streamName)
  this.streamService.getByStreamName(streamName).subscribe(data => {this.updateOPStream = data
    console.log(this.updateOPStream)
    })
}

onChangeStream(value:any){
  this.strSelectOptionValue = value

    if(value == "streamCode"){
      this.strSelectOptionValue2 = this.updateOPStream.streamCode
    } else if(value == "streamName"){
      this.strSelectOptionValue2 = this.updateOPStream.streamName
    } 
}

onSubmitStreamUpdate(updatingValue:any){

  if(this.strSelectOptionValue == "streamName"){
    this.streamService.updateStreamName(this.streamUpdateForm.value.streamName, this.streamUpdateForm.value.updatingValue).subscribe()
  } else if(this.strSelectOptionValue == "streamCode"){
    this.streamService.updateStreamCode(this.streamUpdateForm.value.streamName, this.streamUpdateForm.value.updatingValue).subscribe()
  }

  alert("updated succesfully")
}

AddCourse(){
  document.getElementById("AddCourse")?.classList.remove("d-none");
  document.getElementById("AddCollege")?.classList.add("d-none");
  document.getElementById("AddStream")?.classList.add("d-none");
  document.getElementById("AddUniversity")?.classList.add("d-none");
  
}

AddCollege(){
  document.getElementById("AddCourse")?.classList.add("d-none");
  document.getElementById("AddCollege")?.classList.remove("d-none");
  document.getElementById("AddStream")?.classList.add("d-none");
  document.getElementById("AddUniversity")?.classList.add("d-none");;
}

AddStream(){
  document.getElementById("AddCourse")?.classList.add("d-none");
  document.getElementById("AddCollege")?.classList.add("d-none");
  document.getElementById("AddStream")?.classList.remove("d-none");
  document.getElementById("AddUniversity")?.classList.add("d-none");
}

AddUniversity(){
  document.getElementById("AddCourse")?.classList.add("d-none");
  document.getElementById("AddCollege")?.classList.add("d-none");
  document.getElementById("AddStream")?.classList.add("d-none");
  document.getElementById("AddUniversity")?.classList.remove("d-none");
}


}
