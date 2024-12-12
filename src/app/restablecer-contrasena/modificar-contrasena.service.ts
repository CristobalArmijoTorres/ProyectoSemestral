import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModificarContrasenaService {
  private apiUrl = 'http://192.168.84.55:3000/usuarios';

  constructor(private http: HttpClient) {}

  updatePassword(userId: number, newPassword: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${userId}`, { password: newPassword });
  }
}
