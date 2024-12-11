import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Asignatura, Asistencia, Estudiante } from '../asignaturas/models';

@Injectable({
  providedIn: 'root'
})
export class RegAsistenciaService {
  private apiUrl = 'http://localhost:3000';
  private apiUrlu = 'http://localhost:3000/usuarios'; 


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

 
  getAsistenciasByStudentId(studentId: string): Observable<Asistencia[]> {
    return this.http.get<Asistencia[]>(`${this.apiUrl}/asistencias`).pipe(
      map(asistencias => asistencias.filter(asistencia => asistencia.estudianteId === studentId)),
      catchError(error => {
        console.error('Error al obtener asistencias', error);
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
 
  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrlu}/${userId}`;
    console.log('URL de la API:', url);  
    return this.http.get<any>(url);
  }
  

getAsistenciasByStudentIdGroupedByAsignatura(studentId: string): Observable<{ asignaturaId: string; asistencias: Asistencia[] }[]> {
  return this.getAsistenciasByStudentId(studentId).pipe(
    map(asistencias => {
   
      const grouped = asistencias.reduce((acc, asistencia) => {
        const key = asistencia.asignaturaId;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(asistencia);
        return acc;
      }, {} as { [key: string]: Asistencia[] });

    
      return Object.keys(grouped).map(asignaturaId => ({
        asignaturaId,
        asistencias: grouped[asignaturaId]
      }));
    })
  );
}

}
