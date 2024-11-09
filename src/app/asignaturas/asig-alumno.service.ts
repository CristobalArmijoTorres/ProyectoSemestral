// asig-alumno.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Estudiante, Asignatura } from './models'; // Importa tus modelos

@Injectable({
  providedIn: 'root'
})
export class AsigAlumnoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Obtener asignaturas inscritas por el estudiante ID
  getAsignaturasByStudentId(studentId: string): Observable<Asignatura[]> {
    return this.http.get<any[]>(`${this.apiUrl}/secciones`).pipe(
      mergeMap(secciones => {
        // Buscar el estudiante en todas las secciones
        for (let seccion of secciones) {
          const estudiante = seccion.estudiantes.find((est: Estudiante) => est.estudianteId === studentId);
          if (estudiante) {
            return new Observable<Asignatura[]>(observer => {
              observer.next(estudiante.asignaturas);
              observer.complete();
            });
          }
        }
        // Retorna un arreglo vacío si no se encuentra el estudiante
        return new Observable<Asignatura[]>(observer => {
          observer.next([]);
          observer.complete();
        });
      }),
      catchError(error => {
        console.error('Error al obtener asignaturas', error);
        return throwError(error);
      })
    );
  }
}
