import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  get<T>(url:string, params?: {[key: string]: string | number }, headers?: { [key: string]: string }): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    const httpHeaders = new HttpHeaders(headers || {});

    const queryParams = httpParams.toString();
    const fullUrl = `${this.apiUrl}/${url}?${queryParams}`;

    console.log('Full API URL:', fullUrl); // Log the full URL

    return this.http.get<T>(`${this.apiUrl}/${url}`, { params: httpParams, headers: httpHeaders })
      .pipe(

        tap({
          next: (response) => {
            console.log('Request succeeded with response:', response);
          },
          error: (error) => {
            console.error('Request failed:', error);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('API request failed:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          return throwError(() => new Error('An error occurred while fetching data.'));
        })
      );
  }
}
