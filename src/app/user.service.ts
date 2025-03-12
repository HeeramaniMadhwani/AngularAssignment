import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = "https://dummyjson.com/auth/me";
    private usersUrl = "https://dummyjson.com/users"

  constructor(private http:HttpClient) { }

  getProfile(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }

  getUseers(): Observable<any>{
       return this.http.get(this.usersUrl);
  }
}
