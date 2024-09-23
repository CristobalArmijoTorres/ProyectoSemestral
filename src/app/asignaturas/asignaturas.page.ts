import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas = [
    { nombre: "Arquitectura", codigo: "PGY4121", profesor: "Dr. Juan Pérez", contenido: "Ejemplo de una ventana modal para Arquitectura", mostrarModal: false },
    { nombre: "Calidad De Software", codigo: "MDY5001", profesor: "Ana Gómez", contenido: "Ejemplo de una ventana modal para Calidad De Software", mostrarModal: false },
    { nombre: "Estadística Descriptiva", codigo: "EDY5001", profesor: "Carlos López", contenido: "Ejemplo de una ventana modal para Estadística Descriptiva", mostrarModal: false },
    { nombre: "Ética Para El Trabajo", codigo: "ETI4001", profesor: "Sofía Torres", contenido: "Ejemplo de una ventana modal para Ética Para El Trabajo", mostrarModal: false },
    { nombre: "Inglés Intermedio", codigo: "ING3001", profesor: "Laura Martínez", contenido: "Ejemplo de una ventana modal para Inglés Intermedio", mostrarModal: false },
    { nombre: "Proceso De Portafolio", codigo: "PDP6001", profesor: "Marco Díaz", contenido: "Ejemplo de una ventana modal para Proceso De Portafolio", mostrarModal: false },
  ];

  constructor() { }

  ngOnInit() { }

  verModal(asignatura: any) {
    asignatura.mostrarModal = !asignatura.mostrarModal;
  }
}
