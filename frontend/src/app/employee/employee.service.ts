import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
private baseUrl = "http://127.0.0.1:8000/api/employee"
  constructor(private http:HttpClient) { }

  getEmployeeList(){
    return this.http.get(`${this.baseUrl}`)
  }

  createEmployee(value: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,value)
  }

  updataEmployee(value: any,id: number){
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  getEmployee(id: number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  getEmployeeDetail(id: number){
    return this.http.get(`${this.baseUrl}/show/${id}`)
  }

  
}
