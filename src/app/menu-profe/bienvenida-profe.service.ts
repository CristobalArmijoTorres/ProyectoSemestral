import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienvenidaProfeService {
  private apiUrl = 'http://192.168.84.55:3000/usuarios'; 

  constructor(private http: HttpClient) {}

  
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}
