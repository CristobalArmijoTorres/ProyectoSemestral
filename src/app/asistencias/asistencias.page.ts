import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asistencias/reg-asistencia.service';
import { Asistencia } from '../asignaturas/models';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistencias: Asistencia[] = [];
  selectedAsistencia: Asistencia | null = null;
  showModal = false;
  studentId: string = '1'; // ID del estudiante (reemplázalo con el ID del estudiante que necesitas)

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.obtenerAsistencias();
  }

  obtenerAsistencias() {
    this.asigAlumnoService.getAsistenciasByStudentId(this.studentId).subscribe({
      next: (asistencias) => {
        this.asistencias = asistencias;
      },
      error: (error) => {
        console.error('Error al obtener asistencias:', error);
      }
    });
  }

  openModal(asistencia: Asistencia) {
    this.selectedAsistencia = asistencia;
    this.showModal = true;
  }

  closeModal() {
    this.selectedAsistencia = null;
    this.showModal = false;
  }
}
