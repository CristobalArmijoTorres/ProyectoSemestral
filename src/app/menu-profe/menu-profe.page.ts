import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BienvenidaProfeService } from '../menu-profe/bienvenida-profe.service';

@Component({
  selector: 'app-menu-profe',
  templateUrl: './menu-profe.page.html',
  styleUrls: ['./menu-profe.page.scss'],
})
export class MenuProfePage implements OnInit {
  usuario: string = ''; // Nombre del usuario cargado desde el servicio
  image: string = 'assets/slide1.png'; // Imagen de bienvenida

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private bienvenidaProfeService: BienvenidaProfeService // Inyectamos el servicio de bienvenida para el profesor
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    // Obtener el usuario desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      // Llamar al servicio para obtener los datos del usuario
      this.bienvenidaProfeService.getUserById(storedUser.id).subscribe(
        (userData: any) => {
          this.usuario = userData.username; // Asigna el nombre al campo 'usuario'
        },
        (error: any) => {
          console.error('Error al obtener los datos del usuario', error);
        }
      );
    }
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('user'); // Eliminar el usuario de localStorage al cerrar sesión
            this.navController.navigateRoot(['/home']); // Redirigir a la página de inicio
          }
        }
      ]
    });
    await alert.present();
  }
}
