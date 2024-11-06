import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsigProfeService {
  private apiUrl = 'http://localhost:3000/asignaturas'; // Ruta a las asignaturas en db.json

  constructor(private http: HttpClient) {}

  // Método para obtener asignaturas por el ID del profesor
  getAsignaturasByProfesorId(profesorId: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(asignaturas => asignaturas.filter(asignatura => asignatura.profesorId === profesorId))
    );
  }
}
