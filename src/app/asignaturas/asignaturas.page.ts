import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asignaturas/asig-alumno.service';
import { Asignatura } from './models'; // Importa el modelo

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      this.asigAlumnoService.getAsignaturasByStudentId(storedUser.id).subscribe(
        (asignaturas: Asignatura[]) => {
          console.log('Asignaturas cargadas:', asignaturas);
          this.asignaturas = asignaturas.map(asignatura => ({ ...asignatura, mostrarModal: false }));
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  verModal(asignatura: Asignatura) {
    asignatura.mostrarModal = !asignatura.mostrarModal;
  }
}