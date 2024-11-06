import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para obtener asignaturas por profesor ID
  getAsignaturasByProfesorId(profesorId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas`).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.profesorId === profesorId))
    );
  }
}
