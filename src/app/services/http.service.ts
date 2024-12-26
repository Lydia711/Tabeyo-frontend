import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  // GET generic request
  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  // POST generic request
  post(endpoint: string, payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, payload);
  }


}
