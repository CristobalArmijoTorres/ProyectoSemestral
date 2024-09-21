import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  mostrar=false;
  mostrar2=false;
  mostrar3=false;
  mostrar4=false;
  mostrar5=false;
  mostrar6=false;
  permitir: Boolean = false;
  asignaturas = [
    { nombre: "PGY4121", nota: 39.55},
    { nombre: "mdy5001", nota: 45 },
    { nombre: "BDY5001", nota: 55 },
  ]
  constructor() { }

  ngOnInit() {
  }
  //forma modal
  verModal1()
  {
    this.mostrar = !this.mostrar;
  }
  verModal2()
  {
    this.mostrar2 = !this.mostrar2;
  }
  verModal3()
  {
    this.mostrar3 = !this.mostrar3;
  }
  verModal4()
  {
    this.mostrar4 = !this.mostrar4;
  }
  verModal5()
  {
    this.mostrar5 = !this.mostrar5;
  }
  verModal6()
  {
    this.mostrar6 = !this.mostrar6;
  }
  //forma 2
  mostrar1()
  {
    this.permitir = !this.permitir;
  }
}
