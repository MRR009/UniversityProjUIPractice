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

  depricateCollege(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
