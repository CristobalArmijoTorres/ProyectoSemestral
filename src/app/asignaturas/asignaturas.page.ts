import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  mostrar=false;
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
    this.mostrar = !this.mostrar;
  }
  verModal3()
  {
    this.mostrar = !this.mostrar;
  }
  verModal4()
  {
    this.mostrar = !this.mostrar;
  }
  verModal5()
  {
    this.mostrar = !this.mostrar;
  }
  verModal6()
  {
    this.mostrar = !this.mostrar;
  }
  //forma 2
  mostrar1()
  {
    this.permitir = !this.permitir;
  }
}
