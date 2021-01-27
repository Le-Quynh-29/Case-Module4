import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    
  
}
