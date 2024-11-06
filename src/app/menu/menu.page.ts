import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; 
import { UserService } from '../menu/bienvenida.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string = ''; // Nombre del usuario cargado desde la base de datos
  image: string = 'assets/slide1.png'; // Ruta de la imagen

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private userService: UserService // Inyectamos el servicio de usuario
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    // Obtiene el usuario almacenado en localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      // Llama al servicio para obtener el nombre del usuario
      this.userService.getUserById(storedUser.id).subscribe(
        (userData) => {
          this.usuario = userData.username; // Asigna el nombre al campo 'usuario'
        },
        (error) => {
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
            localStorage.removeItem('user'); // Elimina el usuario del localStorage
            this.navController.navigateRoot(['/home']); // Redirige al inicio de sesión
          }
        }
      ]
    });
    await alert.present();
  }
}
