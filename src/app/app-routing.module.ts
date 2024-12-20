import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./restablecer-contrasena/restablecer-contrasena.module').then( m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'reg-asistencia',
    loadChildren: () => import('./reg-asistencia/reg-asistencia.module').then( m => m.RegAsistenciaPageModule)
  },
  {
    path: 'credencial',
    loadChildren: () => import('./credencial/credencial.module').then( m => m.CredencialPageModule)
  },
  {
    path: 'menu-profe',
    loadChildren: () => import('./menu-profe/menu-profe.module').then( m => m.MenuProfePageModule)
  },
  {
    path: 'asignatura-profe',
    loadChildren: () => import('./asignatura-profe/asignatura-profe.module').then( m => m.AsignaturaProfePageModule)
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./leer-qr/leer-qr.module').then( m => m.LeerQrPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
