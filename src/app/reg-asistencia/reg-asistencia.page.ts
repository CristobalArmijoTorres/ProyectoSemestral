import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {
  mostrar = false;
  constructor() { }
  
  ngOnInit() {
  }
  
  verModal()
  {
    this.mostrar = !this.mostrar;
  }

}
