import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Asegúrate de importar throwError
import { map, catchError } from 'rxjs/operators'; // Asegúrate de importar catchError

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para obtener asignaturas por profesor ID
  getAsignaturasByProfesorId(profesorId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas`).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.profesorId === profesorId)),
      catchError(error => {
        console.error('Error al obtener asignaturas', error);
        return throwError(error); // Utiliza throwError para lanzar el error
      })
    );
  }
}
