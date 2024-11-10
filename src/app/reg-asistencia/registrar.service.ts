import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAsignaturasByProfesorId(profesorId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas`).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.profesorId === profesorId)),
      catchError(error => {
        console.error('Error al obtener asignaturas', error);
        return throwError(error);
      })
    );
  }

  getSecciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/secciones`).pipe(
      catchError(error => {
        console.error('Error al obtener secciones', error);
        return throwError(error);
      })
    );
  }
}
