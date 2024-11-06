import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienvenidaProfeService {
  private apiUrl = 'http://localhost:3000/usuarios'; // URL base para usuarios en db.json

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del profesor por ID
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}
