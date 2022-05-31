import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private baseUrl = 'http://localhost:9099/university';
  constructor(private http: HttpClient) { }

  getUniversity(uniCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode?uniCode={${uniCode}`);
  }

  getAllUniversities():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }

  getCollegesInUniversity(uniCode: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/collegesinuniversity?uniCode=${uniCode}`)
  }

  createUniversity(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateUniversity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  depricateUniversity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
