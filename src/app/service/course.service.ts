import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private baseUrl = 'http://localhost:9099/course';
  constructor(private http: HttpClient) { }

  readCourseByCode(courseCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/readbycode/`+`${courseCode}`);
  }


  readCourseByName(courseName: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/readByName?courseName=${courseName}`);
  }

  getCollegesWithCourse(courseCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getcollegeswithcourse/`+`${courseCode}`);
  }

  getAllCourses():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }


  createCourse(course: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, course);
  }

  updateCourse(course: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, course);
  }


  updateCourseName(courseName: String, newName:String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecoursename?courseName=${courseName}&newName=${newName}`, value);
  }

  updateCourseCode(courseName: String, newName:String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecoursecode?courseName=${courseName}&newName=${newName}`, value);
  }

  updateCourseFee(courseName: String, newFee:number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecoursefee?courseName=${courseName}&newName=${newFee}`, value);
  }

  updateCourseDuration(courseName: String, newName:String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecourseduration?courseName=${courseName}&newName=${newName}`, value);
  }

  updateCourseType(courseName: String, newName:String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecoursetype?courseName=${courseName}&newName=${newName}`, value);
  }

  depricateCollege(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
function value(arg0: string, value: any): Observable<Object> {
  throw new Error('Function not implemented.');
}

