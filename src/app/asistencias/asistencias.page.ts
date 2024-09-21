import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistenciaArq = [
    {asignatura : "Arquitectura", fecha: '02-09-2024', presente: true},
    {asignatura : "Arquitectura", fecha: '04-09-2024', presente: true},
    {asignatura : "Arquitectura", fecha: '06-09-2024', presente: false},
    {asignatura : "Arquitectura", fecha: '09-09-2024', presente: false},
    {asignatura : "Arquitectura", fecha: '11-09-2024', presente: true},
    {asignatura : "Arquitectura", fecha: '13-09-2024', presente: false},
  ]
  asistenciaCDS = [
    {asignatura : "Calidad De Software", fecha: '02-09-2024', presente: true},
    {asignatura : "Calidad De Software", fecha: '04-09-2024', presente: true},
    {asignatura : "Calidad De Software", fecha: '06-09-2024', presente: false},
    {asignatura : "Calidad De Software", fecha: '09-09-2024', presente: false},
    {asignatura : "Calidad De Software", fecha: '11-09-2024', presente: true},
    {asignatura : "Calidad De Software", fecha: '13-09-2024', presente: false},
  ]
  asistenciaED = [
    {asignatura : "Estadística Descriptiva", fecha: '02-09-2024', presente: true},
    {asignatura : "Estadística Descriptiva", fecha: '04-09-2024', presente: true},
    {asignatura : "Estadística Descriptiva", fecha: '06-09-2024', presente: false},
    {asignatura : "Estadística Descriptiva", fecha: '09-09-2024', presente: false},
    {asignatura : "Estadística Descriptiva", fecha: '11-09-2024', presente: true},
    {asignatura : "Estadística Descriptiva", fecha: '13-09-2024', presente: false},
  ]
  asistenciaEPET = [
    {asignatura : "Ética Para El Trabajo", fecha: '02-09-2024', presente: true},
    {asignatura : "Ética Para El Trabajo", fecha: '04-09-2024', presente: true},
    {asignatura : "Ética Para El Trabajo", fecha: '06-09-2024', presente: false},
    {asignatura : "Ética Para El Trabajo", fecha: '09-09-2024', presente: false},
    {asignatura : "Ética Para El Trabajo", fecha: '11-09-2024', presente: true},
    {asignatura : "Ética Para El Trabajo", fecha: '13-09-2024', presente: false},
  ]
  asistenciaII = [
    {asignatura : "Ingles Intermedio", fecha: '02-09-2024', presente: true},
    {asignatura : "Ingles Intermedio", fecha: '03-09-2024', presente: true},
    {asignatura : "Ingles Intermedio", fecha: '04-09-2024', presente: false},
    {asignatura : "Ingles Intermedio", fecha: '05-09-2024', presente: false},
    {asignatura : "Ingles Intermedio", fecha: '06-09-2024', presente: true},
    {asignatura : "Ingles Intermedio", fecha: '09-09-2024', presente: false},
  ]
  asistenciaPDP = [
    {asignatura : "Proceso De Portafolio", fecha: '12-08-2024', presente: true},
    {asignatura : "Proceso De Portafolio", fecha: '16-09-2024', presente: true},
  ]

  permitir1: Boolean = false;
  permitir2: Boolean = false;
  permitir3: Boolean = false;
  permitir4: Boolean = false;
  permitir5: Boolean = false;
  permitir6: Boolean = false;

  modal1=false;
  modal2=false;
  modal3=false;
  modal4=false;
  modal5=false;
  modal6=false;

  constructor() { }

  ngOnInit() {
  }

  verModal1()
  {
    this.modal1 = !this.modal1;
  }
  verModal2()
  {
    this.modal2 = !this.modal2;
  }
  verModal3()
  {
    this.modal3 = !this.modal3;
  }
  verModal4()
  {
    this.modal4 = !this.modal4;
  }
  verModal5()
  {
    this.modal5 = !this.modal5;
  }
  verModal6()
  {
    this.modal6 = !this.modal6;
  }

  mostrar1()
  {
    this.permitir1 = !this.permitir1;
  }
  mostrar2()
  {
    this.permitir2 = !this.permitir2;
  }
  mostrar3()
  {
    this.permitir3 = !this.permitir3;
  }
  mostrar4()
  {
    this.permitir4 = !this.permitir4;
  }
  mostrar5()
  {
    this.permitir5 = !this.permitir5;
  }
  mostrar6()
  {
    this.permitir6 = !this.permitir6;
  }
  
}
