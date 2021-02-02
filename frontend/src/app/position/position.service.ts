import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  

  private baseUrl = "http://127.0.0.1:8000/api/positions"
  getPosition: any;
  constructor(private http:HttpClient) { }

  getPositionList(){
    return this.http.get(`${this.baseUrl}`)
  }

    
  
  createPosition(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updatePosition(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  // getPosition(id: number){
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  getPositionDetail(id: number){
    return this.http.get(`${this.baseUrl}/show/${id}`)
  }
}
