import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // You can add more methods here if you need to fetch specific products or categories.
  // For example:
  // getProductById(id: number): Observable<any> {
  // return this.http.get(`${this.apiUrl}/${id}`);
  // }
}

