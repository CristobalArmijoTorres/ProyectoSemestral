import { Component, OnInit } from '@angular/core';
import { AsigProfeService } from '../asignatura-profe/asig-profe.service';

@Component({
  selector: 'app-asignatura-profe',
  templateUrl: './asignatura-profe.page.html',
  styleUrls: ['./asignatura-profe.page.scss'],
})
export class AsignaturaProfePage implements OnInit {
  asignaturas: any[] = [];
  isModalOpen = false;
  selectedAsignatura: any = null;

  constructor(private asigProfeService: AsigProfeService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.id) {
      this.asigProfeService.getAsignaturasByProfesorId(storedUser.id).subscribe(
        (asignaturas: any[]) => {
          this.asignaturas = asignaturas;
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  openModal(asignatura: any) {
    this.selectedAsignatura = asignatura;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedAsignatura = null;
  }
}
