import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user'); // Aquí estás verificando si el usuario está en el localStorage
    return user !== null;  // Si el usuario existe, está autenticado
  }

  // Iniciar sesión
  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user)); // Guarda los datos del usuario en el localStorage
    this.router.navigate(['/home']); // Redirige al home después de iniciar sesión
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('user'); // Elimina el usuario del localStorage
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
