import { Component, OnInit } from '@angular/core';
import { RegAsistenciaService } from '../asistencias/reg-asistencia.service';
import { Asistencia } from '../asignaturas/models';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistenciasAgrupadas: { asignaturaId: string; asistencias: Asistencia[] }[] = [];
  selectedAsistencias: Asistencia[] | null = null;
  showModal = false;
  studentId: string = '3'; 


  constructor(private RegAsistenciaService: RegAsistenciaService) {}

  ngOnInit() {
    this.obtenerAsistenciasAgrupadas();
  }

  obtenerAsistenciasAgrupadas() {
    this.RegAsistenciaService.getAsistenciasByStudentIdGroupedByAsignatura(this.studentId).subscribe({
      next: (asistenciasAgrupadas) => {
        this.asistenciasAgrupadas = asistenciasAgrupadas;
      },
      error: (error) => {
        console.error('Error al obtener asistencias agrupadas:', error);
      }
    });
  }

  openModal(asistencias: Asistencia[]) {
    this.selectedAsistencias = asistencias;
    this.showModal = true;
  }

  closeModal() {
    this.selectedAsistencias = null;
    this.showModal = false;
  }
}
