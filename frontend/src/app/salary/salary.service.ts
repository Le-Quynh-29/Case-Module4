import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

private baseUrl = "http://127.0.0.1:8000/api/salary"
constructor(private http:HttpClient) { }


getSalaryList(){
  return this.http.get(`${this.baseUrl}`)
}

}
