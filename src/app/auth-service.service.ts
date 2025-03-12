import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<any>{
    return this.http.post(this.apiUrl, credentials);
  }

  isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
