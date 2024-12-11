import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienvenidaService {
  private apiUrl = 'http://192.168.101.9:3000/usuarios'; 

  constructor(private http: HttpClient) {}

  
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}
