import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://localhost:3000/asistencias';

  constructor(private http: HttpClient) {}

  registrarAsistencia(asignaturaId: string) {
    const fechaActual = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
    const asistencia = {
      asignaturaId: asignaturaId,
      fecha: fechaActual,
      estado: 'Presente'
    };
    return this.http.post(this.apiUrl, asistencia);
  }
}
