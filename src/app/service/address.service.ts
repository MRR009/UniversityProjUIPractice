import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  
  private baseUrl = 'http://localhost:9099/address';
  constructor(private http: HttpClient) { }

  getcollegeAddress(collegeCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getcollegeaddress/`+`${collegeCode}`);
  }

  getUniversityAddress(universityCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getuniversityaddress/`+`${universityCode}`);
  }

  getAllAddress():Observable<any>{
    return this.http.get(`${this.baseUrl}/getalladdresses`);
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
