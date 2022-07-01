import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private baseUrl = 'http://localhost:9099/stream';
  constructor(private http: HttpClient) { }

  getStream(streamCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode/?strmCode=$${streamCode}`);
  }

  getByStreamName(streamName: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbyname?strmName=${streamName}`);
  }

  getAllStream():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }

  getCollegesWithStream(streamCode: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/collegeswithstream?strmCode=${streamCode}`)
  }

  
  getCollegesWithStreams(streamCodes: String[]):Observable<any>{
    let queryParams = new HttpParams()
    // queryParams = queryParams.append("streamCodes", "")
    streamCodes.forEach(code => {
      queryParams = queryParams.append("streamCodes",code.toString());
      //queryParams.set('streamCodes',c)
    })
    //console.log(queryParams)
    return this.http.get(`${this.baseUrl}/collegeswithstreams`, {params:queryParams})
  }

  createStream(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  updateStream(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateStreamName(streamName: String, newName: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatestreamname?streamName=${streamName}&newName=${newName}`, value);
  }

  updateStreamCode(streamName: String, newCode: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatestreamcode?streamName=${streamName}&newCode=${newCode}`, value);
  }

  depricateStream(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
}
function value(arg0: string, value: any): Observable<Object> {
  throw new Error('Function not implemented.');
}

