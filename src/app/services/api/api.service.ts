import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  // GET generic request
  get<T>(url:string, params?: {[key: string]: string | number }, headers?: { [key: string]: string }): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    const httpHeaders = new HttpHeaders(headers || {});
    return this.http.get<T>(`${this.apiUrl}/${url}`, { params: httpParams, headers: httpHeaders });
  }
}
