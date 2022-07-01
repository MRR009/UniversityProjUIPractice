import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { University } from '../entity/university.entity';



@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universities$ = new BehaviorSubject<University[]>([])


  private baseUrl = 'http://localhost:9099/university';
  constructor(private http: HttpClient) { }

  public init(): void {
    this.http.get<University[]>('http://localhost:9099/university/getall').subscribe((universities) => {
      this.universities$.next(universities);
    })
  }

  // public get newUniversities(): Observable<University[]>{
  //   return this.universities$.pipe(
  //     map((universities) => universities.filter((university) => university.isNew))
  //   )
  // }

  public getUniversities(): Observable<University[]>{
      return this.universities$;
  }

  getUniversity(uniCode: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbycode?uniCode=${uniCode}`);
  }

  getUniversityByName(uniName: String): Observable<any> {
    console.log(uniName)
    return this.http.get(`${this.baseUrl}/getbyname?name=${uniName}`);
  }

  getAllUniversities():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }

  getCollegesInUniversity(uniCode: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/collegesinuniversity?uniCode=${uniCode}`)
  }

  getCollegesInUniversities(universityCodes: String[]):Observable<any>{
    let queryParams = new HttpParams()
    universityCodes.forEach(code => {
      queryParams = queryParams.append("universityCodes",code.toString());
    })
    return this.http.get(`${this.baseUrl}/collegesinuniversities`, {params:queryParams})
  }

  createUniversity(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  updateUniversityName(uniName: String, newName: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatename?universityName=${uniName}&newName${newName}`, value);
  }

  updateUniversityCode(uniName: String, newCode: String): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatecode?universityName=${uniName}&newCode${newCode}`, value);
  }

  updateUniversityEst(uniName: String, newEstb: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateestablished?universityName=${uniName}&newEstb=${newEstb}`, value);
  }

  updateUniversity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  depricateUniversity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

//   getfilteredColleges(filters: { uniCode: string, genre: string } = { platform: "", genre: "" }): Observable<Product[]> {
//     const filteredProducts = this.collegesList.filter(product => {
//         return (filters.uniCode === "" ? true : filters.uniCode === product.platform ) && (filters.genre === "" ? true : filters.genre === product.genre)
//     })

//     return of(filteredProducts);
// }

}
function value(arg0: string, value: any): Observable<Object> {
  throw new Error('Function not implemented.');
}

