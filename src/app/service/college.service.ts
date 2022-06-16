import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College } from '../entity/college.entity';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private filtColleges: College[] = []
  
  private baseUrl = 'http://localhost:9099/college';
  constructor(private http: HttpClient) { }

  getcollege(collegeCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode/`+`${collegeCode}`);
  }

  getAllColleges():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }


  createCollege(college: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, college);
  }

  updateCollege(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  depricateCollege(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
