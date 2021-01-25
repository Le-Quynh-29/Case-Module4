import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl = "http://127.0.0.1:8000/api/employee"
  constructor(private http:HttpClient) { }

  getEmployeeList(){
    return this.http.get(`${this.baseUrl}`)
  }
}
