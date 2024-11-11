// asistencias.page.ts
import { Component, OnInit } from '@angular/core';
import { RegAsistenciaService } from '../asistencias/reg-asistencia.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistenciaArq: any[] = [];
  asistenciaCDS: any[] = [];
  asistenciaED: any[] = [];
  asistenciaEPET: any[] = [];
  asistenciaII: any[] = [];
  asistenciaPDP: any[] = [];
  
  // Variables para controlar el estado de los modales
  permitir1 = false;
  permitir2 = false;
  permitir3 = false;
  permitir4 = false;
  permitir5 = false;
  permitir6 = false;

  modal1 = false;
  modal2 = false;
  modal3 = false;
  modal4 = false;
  modal5 = false;
  modal6 = false;

  constructor(private asistenciaService: RegAsistenciaService) {}

  ngOnInit() {
    this.cargarAsistencias();
  }

  cargarAsistencias() {
    this.asistenciaService.obtenerAsistencias().subscribe((data) => {
      this.asistenciaArq = data.arquitectura || [];
      this.asistenciaCDS = data.calidadDeSoftware || [];
      this.asistenciaED = data.estadisticaDescriptiva || [];
      this.asistenciaEPET = data.eticaParaElTrabajo || [];
      this.asistenciaII = data.inglesIntermedio || [];
      this.asistenciaPDP = data.procesoDePortafolio || [];
    });
  }

  // Métodos para alternar la visibilidad de las listas de asistencia
  mostrar1() { this.permitir1 = !this.permitir1; }
  mostrar2() { this.permitir2 = !this.permitir2; }
  mostrar3() { this.permitir3 = !this.permitir3; }
  mostrar4() { this.permitir4 = !this.permitir4; }
  mostrar5() { this.permitir5 = !this.permitir5; }
  mostrar6() { this.permitir6 = !this.permitir6; }

  // Métodos para alternar la visibilidad de los modales
  verModal1() { this.modal1 = !this.modal1; }
  verModal2() { this.modal2 = !this.modal2; }
  verModal3() { this.modal3 = !this.modal3; }
  verModal4() { this.modal4 = !this.modal4; }
  verModal5() { this.modal5 = !this.modal5; }
  verModal6() { this.modal6 = !this.modal6; }
}
