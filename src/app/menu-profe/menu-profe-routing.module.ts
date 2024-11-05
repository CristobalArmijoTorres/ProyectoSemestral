import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProfePage } from './menu-profe.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProfePageRoutingModule {}
