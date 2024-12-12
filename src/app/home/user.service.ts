import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      map(users => {
        const user = users.find(u => u.password === password);
        if (user) {
          return { success: true, user };
        } else {
          return { success: false, message: 'Usuario o contraseña incorrectos' };
        }
      })
    );
  }
}
