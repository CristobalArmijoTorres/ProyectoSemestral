import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProfePageRoutingModule } from './menu-profe-routing.module';

import { MenuProfePage } from './menu-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProfePageRoutingModule
  ],
  declarations: [MenuProfePage]
})
export class MenuProfePageModule {}
