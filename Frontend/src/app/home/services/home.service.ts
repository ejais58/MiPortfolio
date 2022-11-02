import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl: string = 'http://localhost:3000/api/home';

  constructor(private http: HttpClient) { }

  mensaje(name: string, email: string, msg: string){
    const body = {name, email, msg}
    return this.http.post<Response>(this.baseUrl, body).
    pipe(
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
      )
  }
}
