import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas = [
    { nombre: "Arquitectura", codigo: "ASY4131", profesor: "José Luis Pino", contenido: "Arquitectura, es una asignatura de especialidad, que se ubica en el cuarto semestre y forma parte del módulo de 'Arquitectura de Software' del itinerario formativo. Tiene como propósito que el/la estudiante sea capaz de construir modelos arquitectónicos de soluciones sistémicas de tal manera que soporte los procesos de negocio de acuerdo a los requerimientos de la organización.", mostrarModal: false },
    { nombre: "Calidad De Software", codigo: "CSY4111", profesor: "Luis Alberto Bravo", contenido: "Calidad de software, es una asignatura de especialidad que se ubica en el cuarto semestre de la carrera de Ingeniería en Informática y forma parte del itinerario formativo. Tiene como propósito que el/la estudiante sea capaz de supervisar todas las fases del proceso de desarrollo para garantizar que el software cumpla con los estándares de la empresa.", mostrarModal: false },
    { nombre: "Estadística Descriptiva", codigo: "MAT4140", profesor: "Fabiola Patricia Perez", contenido: "La estadística descriptiva es la técnica matemática que obtiene, organiza, presenta y describe un conjunto de datos con el propósito de facilitar el uso, generalmente con el apoyo de tablas, medidas numéricas o gráficas.", mostrarModal: false },
    { nombre: "Ética Para El Trabajo", codigo: "EAY4450", profesor: "Luis Alfonso Sepulveda", contenido: "Bienvenido al curso 'Ética para el trabajo' que tiene como objetivo general Evaluar desde el punto de vista ético situaciones de la vida laboral, a partir del análisis y la deliberación de casos de ética profesional.", mostrarModal: false },
    { nombre: "Inglés Intermedio", codigo: "INI5111", profesor: "Aracelli Andrea Auspont", contenido: "Welcome to your English course! We invite you to reinforce and improve your previous knowledge of English by taking an active role in classes and by practicing your English with your fellow students and teacher. Remember: 'Practice makes perfect'! In this level you will be able to communicate effectively in a natural way in everyday situations that can be applied to your future job. In this advanced course you will learn to ask for and provide information about yourself and others, talk about past and present favorite activities, make predictions and promises talk about rules in social.", mostrarModal: false },
    { nombre: "Proceso De Portafolio", codigo: "APY4461", profesor: "Victor Jaime Rodriguez", contenido: "El 'Proceso de Portafolio' es un proceso académico cuyo foco es desarrollar la capacidad de autogestión de los estudiantes e integrar todas las competencias del perfil de egreso, a travéz de evidencias que den cuenta del nivel de logro de sus aprendizaje e intereses profesionales.", mostrarModal: false },
  ];

  constructor() { }

  ngOnInit() { }

  verModal(asignatura: any) {
    asignatura.mostrarModal = !asignatura.mostrarModal;
  }
}
