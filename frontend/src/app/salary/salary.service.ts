import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

private baseUrl = "http://127.0.0.1:8000/api/salary"
constructor(private http:HttpClient) { }

getSalaryList(): Observable<any>{
  return this.http.get(`${this.baseUrl}`)
}

getSalary(id: number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

createSalary(value: any): Observable<any>{
  return this.http.post(`${this.baseUrl}`, value)
}

deleteSalary(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

updateSalary(id: number, value: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}
}
