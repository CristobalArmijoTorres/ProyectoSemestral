import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsigProfeService {
  private apiUrl = 'http://192.168.84.55:3000/asignaturas';

  constructor(private http: HttpClient) {}

  getAsignaturasByProfesorId(profesorId: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.profesorId === profesorId))
    );
  }
}
