import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../reg-asistencia/registrar.service';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {
  asignaturas: any[] = []; 
  secciones: any[] = []; 
  qrData: string = ''; 
  mostrar = false; 
  asignaturaSeleccionada: any = null; 
  seccionSeleccionada: any = null;

  constructor(private registrarService: RegistrarService) {}

  ngOnInit() {
    this.cargarAsignaturas();
    this.cargarSecciones();
  }

  
  cargarAsignaturas() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.id) {
      this.registrarService.getAsignaturasByProfesorId(storedUser.id).subscribe(
        (asignaturas: any[]) => {
          this.asignaturas = asignaturas;
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  
  cargarSecciones() {
    this.registrarService.getSecciones().subscribe(
      (secciones: any[]) => {
        this.secciones = secciones;
      },
      (error: any) => {
        console.error('Error al cargar las secciones', error);
      }
    );
  }

  
  generarQR(asignatura: any) {
    const seccionId = asignatura.seccionSeleccionada;
    const seccion = this.secciones.find(sec => sec.id === seccionId);
    
    this.asignaturaSeleccionada = asignatura;
    this.seccionSeleccionada = seccion;

 
    const estudianteId = JSON.parse(localStorage.getItem('user') || '{}').id;

    
    this.qrData = JSON.stringify({
      asignaturaId: asignatura.idAsig,
      nombreAsignatura: asignatura.nombreAsig,
      seccionId: seccionId,
      estudianteId: estudianteId,
      fecha: new Date().toISOString()
    });

    this.verModal(); 
  }

  verModal() {
    this.mostrar = !this.mostrar;
  }
}
