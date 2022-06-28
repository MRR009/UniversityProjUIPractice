import { HttpClient } from '@angular/common/http';
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

//   getfilteredColleges(filters: { uniCode: string, genre: string } = { platform: "", genre: "" }): Observable<Product[]> {
//     const filteredProducts = this.collegesList.filter(product => {
//         return (filters.uniCode === "" ? true : filters.uniCode === product.platform ) && (filters.genre === "" ? true : filters.genre === product.genre)
//     })

//     return of(filteredProducts);
// }

}
