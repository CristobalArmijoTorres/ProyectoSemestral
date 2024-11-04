import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {

  qrData: any = 'su asignatura ha sido registrada'; // Aquí define el contenido del QR
  mostrar = false;
  constructor() { }
  
  ngOnInit() {
  }
  
  verModal()
  {
    this.mostrar = !this.mostrar;
  }

}
