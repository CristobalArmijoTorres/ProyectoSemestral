import { Component, OnInit } from '@angular/core';
import { AsigProfeService } from '../asignatura-profe/asig-profe.service';

@Component({
  selector: 'app-asignatura-profe',
  templateUrl: './asignatura-profe.page.html',
  styleUrls: ['./asignatura-profe.page.scss'],
})
export class AsignaturaProfePage implements OnInit {
  asignaturas: any[] = []; // Lista de asignaturas del profesor

  constructor(private asigProfeService: AsigProfeService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    // Obtener el usuario logueado desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      // Llamar al servicio para obtener las asignaturas del profesor
      this.asigProfeService.getAsignaturasByProfesorId(storedUser.id).subscribe(
        (asignaturas: any[]) => {
          this.asignaturas = asignaturas; // Asignar las asignaturas al arreglo local
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }
}
