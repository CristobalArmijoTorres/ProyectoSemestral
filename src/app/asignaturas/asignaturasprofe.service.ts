import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasprofeService {
  private apiUrl = 'http://localhost:3000/asignaturas';

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
