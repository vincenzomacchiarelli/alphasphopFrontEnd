import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getSaluti = (): Observable<Object> => this.httpClient.get('http://localhost:8080/api/v1/saluti');

  getSalutiWithUserId = (userId: string): Observable<Object> => this.httpClient.get(`http://localhost:8080/api/v1/saluti/${userId}`);

}
