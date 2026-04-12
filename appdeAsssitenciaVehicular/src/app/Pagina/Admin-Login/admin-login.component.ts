import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  adminData = {
    email: '',
    password: ''
  };

  iniciarSesionAdmin(): void {
    this.authService.login(
      this.adminData.email,
      this.adminData.password,
      'admin'
    ).subscribe({
      next: (resp) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('admin_logueado', JSON.stringify(resp.user));
        }

        alert(`Bienvenido administrador ${resp.user.nombre}`);
        this.router.navigate(['/panel-admin']);
      },
      error: (err) => {
        alert(err?.error?.detail || 'No se pudo iniciar sesión como administrador.');
      }
    });
  }
}