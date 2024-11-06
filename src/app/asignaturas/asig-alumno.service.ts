import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsigAlumnoService {
  private apiUrl = 'http://localhost:3000'; // URL base para db.json

  constructor(private http: HttpClient) {}

  // Obtener asignaturas inscritas por el estudiante ID
  getAsignaturasByStudentId(studentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas`).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.estudianteId === studentId))
    );
  }

  // Obtener asistencia según asignatura ID
  getAsistenciaByAsignaturaId(asignaturaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asistencias`).pipe(
      map(asistencias => asistencias.filter(asistencia => asistencia.asignaturaId === asignaturaId))
    );
  }
  
}
