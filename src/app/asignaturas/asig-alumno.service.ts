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
    return this.http.get<Estudiante[]>(`${this.apiUrl}/estudiantes`).pipe(
      mergeMap(estudiantes => {
        const estudiante = estudiantes.find(est => est.id === studentId);
        if (estudiante) {
          return this.getAsignaturas().pipe(
            map(asignaturas => {
              // Filtra las asignaturas que están en las inscripciones del estudiante
              return asignaturas.filter(asignatura => 
                estudiante.inscripciones.some(inscripcion => inscripcion.asignaturaId === asignatura.idAsig)
              );
            })
          );
        }
        // Retorna un arreglo vacío como un Observable
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

  // Método para obtener todas las asignaturas
  private getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.apiUrl}/asignaturas`).pipe(
      catchError(error => {
        console.error('Error al obtener las asignaturas', error);
        return throwError(error);
      })
    );
  }

  // Obtener asistencia según asignatura ID
  getAsistenciaByAsignaturaId(asignaturaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asistencias`).pipe(
      map(asistencias => asistencias.filter(asistencia => asistencia.asignaturaId === asignaturaId)),
      catchError(error => {
        console.error('Error al obtener asistencia', error);
        return throwError(error);
      })
    );
  }
}
