import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private baseUrl = 'http://localhost:9099/stream';
  constructor(private http: HttpClient) { }

  public streamCode: String = "";
  public subject = new Subject<any>();
  private streamCodeSource = new  BehaviorSubject(this.streamCode);
  currentStrmCode = this.streamCodeSource.asObservable();
  changeStrmCode(message: string) {
  this.streamCodeSource.next(message)
  }

  getStream(streamCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode/?strmCode=$${streamCode}`);
  }

  getAllStream():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }

  getCollegesWithStream(streamCode: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/collegeswithstream?strmCode=${streamCode}`)
  }


  createStream(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateStream(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  depricateStream(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}
