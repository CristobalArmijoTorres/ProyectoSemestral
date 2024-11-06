import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del usuario logueado
  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}
