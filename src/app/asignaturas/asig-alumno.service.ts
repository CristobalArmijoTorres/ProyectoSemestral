
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Estudiante, Asignatura } from './models';

@Injectable({
  providedIn: 'root'
})
export class AsigAlumnoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

 
  getAsignaturasByStudentId(studentId: string): Observable<Asignatura[]> {
    return this.http.get<any[]>(`${this.apiUrl}/secciones`).pipe(
      mergeMap(secciones => {
        for (let seccion of secciones) {
          const estudiante = seccion.estudiantes.find((est: Estudiante) => est.estudianteId === studentId);
          if (estudiante) {
            return new Observable<Asignatura[]>(observer => {
              observer.next(estudiante.asignaturas);
              observer.complete();
            });
          }
        }
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


  getAllProfesores(): Observable<{ profesorId: string; nombre: string }[]> {
    return this.http.get<{ profesorId: string; nombre: string }[]>(`${this.apiUrl}/profesores`).pipe(
      catchError(error => {
        console.error('Error al obtener los profesores', error);
        return throwError(error);
      })
    );
  }
}


