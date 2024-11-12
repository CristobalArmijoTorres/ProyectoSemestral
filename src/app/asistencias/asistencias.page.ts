import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asistencias/reg-asistencia.service';
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
  studentId: string = '1'; // ID del estudiante hay que ver como traer el id del estudiante que inicio sesion


  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.obtenerAsistenciasAgrupadas();
  }

  obtenerAsistenciasAgrupadas() {
    this.asigAlumnoService.getAsistenciasByStudentIdGroupedByAsignatura(this.studentId).subscribe({
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
