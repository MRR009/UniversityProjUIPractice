export enum coursType {
    DEGREE, DIPLOMA, CERTIFICATION
}

export class College{
    courseId: number = 0;
  courseCode: String = "";
  courseName:String = "";
  courseFee: number = 0;
  courseDuration: number = 0;
  courseType: coursType | undefined ;
  
  
    
}