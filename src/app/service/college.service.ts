import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { College } from '../entity/college.entity';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  public selectedClgCode: String = "";

  public filtColleges: any

  private collegeList = new BehaviorSubject([]);

  private selectedCollegeCode = new Subject();

  public setCollegeList(list: any) {
    this.collegeList.next(list);
  }

  public getCollegeList() {
    return this.collegeList;
  }

  public setselectedCollegeCode(code: String){
    this.selectedClgCode = code;
  }

  public getselectedCollegeCode(){
    return this.selectedCollegeCode
  }


  private baseUrl = 'http://localhost:9099/college';
  constructor(private http: HttpClient) {}

  getcollege(collegeCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode?` + `code=${collegeCode}`);
  }

  getcollegeByName(collegeName: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbyname?collegeName=${collegeName}`);
  }

  getAllColleges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getall`);
  }


  createCollege(college: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, college);
  }

  updateCollege(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateCollegeName(collegeName: String, newName: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegename?collegeName=${collegeName}&newName=${newName}`, value);
  }

  updateCollegeCode(collegeName: String, newCode: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegecode?collegeName=${collegeName}&newName=${newCode}`, value);
  }

  updateCollegeEst(collegeName: String, newEstabYear: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegeest?collegeName=${collegeName}&newEstabYear=${newEstabYear}`, value);
  }

  updateCollegeInfo(collegeName: String, newColegeInfo: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegeinfo?collegeName=${collegeName}&newColegeInfo=${newColegeInfo}`, value);
  }

  updateCollegeType(collegeName: String, newType: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegetype?collegeName=${collegeName}&newType=${newType}`, value);
  }

  updateCollegeDescription(collegeName: String, newCollegeDescription: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegedescription?collegeName=${collegeName}&newCollegeDescription=${newCollegeDescription}`, value);
  }

  updateCollegeLogo(collegeName: String, newCollegeLogo: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegelogo?collegeName=${collegeName}&newCollegeLogo=${newCollegeLogo}`, value);
  }

  updateCollegeImage(collegeName: String, newCollegeImage: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegeimage?collegeName=${collegeName}&newCollegeImage=${newCollegeImage}`, value);
  }

  updateCollegeLink(collegeName: String, newCollegeLink: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecollegelink?collegeName=${collegeName}&newCollegeLink=${newCollegeLink}`, value);
  }


  depricateCollege(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
function value(arg0: string, value: any): Observable<Object> {
  throw new Error('Function not implemented.');
}

