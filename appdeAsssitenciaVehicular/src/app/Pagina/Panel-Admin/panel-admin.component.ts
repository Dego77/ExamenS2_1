import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent implements OnInit {
  admin = {
    nombre: 'admin',
    email: 'admin@emergauto.com'
  };

  selectedMenu = 'dashboard';
  /*selectedMenu = 'perfil';*/

  resumen = [
    { titulo: 'Usuarios Totales', valor: 24, detalle: '+3 esta semana', icono: '👤' },
    { titulo: 'Talleres Registrados', valor: 8, detalle: '2 activos hoy', icono: '🔧' },
    { titulo: 'Solicitudes Activas', valor: 12, detalle: 'En proceso', icono: '📋' },
    { titulo: 'Ingresos del Mes', valor: 'Bs 3.250', detalle: 'Comisiones acumuladas', icono: '💰' }
  ];

  solicitudesRecientes = [
    { servicio: 'Cambio de Neumático', usuario: 'Juan Pérez', taller: 'Taller Norte', estado: 'Pendiente', fecha: '2026-04-11' },
    { servicio: 'Carga de Batería', usuario: 'Ana López', taller: 'ElectroAuto', estado: 'Asignado', fecha: '2026-04-10' },
    { servicio: 'Grúa y Remolque', usuario: 'Carlos Rojas', taller: 'Rescate Vial', estado: 'Completado', fecha: '2026-04-09' }
  ];

  usuarios = [
    { nombre: 'Juan Pablo', email: 'jpablo@gmail.com', rol: 'Cliente', estado: 'Activo' },
    { nombre: 'Taller Central', email: 'taller_central@gmail.com', rol: 'Taller', estado: 'Activo' },
    { nombre: 'Carlos Ruiz', email: 'carlos@gmail.com', rol: 'Cliente', estado: 'Inactivo' }
  ];

  talleres = [
    { nombre: 'Taller Central', encargado: 'Luis Rojas', telefono: '70809000', estado: 'Activo' },
    { nombre: 'ElectroAuto', encargado: 'María Pérez', telefono: '71234567', estado: 'Activo' },
    { nombre: 'Mecánica Express', encargado: 'José Flores', telefono: '70011223', estado: 'Pendiente' }
  ];

  reportes = [
    { titulo: 'Solicitudes del Mes', valor: '35' },
    { titulo: 'Talleres Activos', valor: '8' },
    { titulo: 'Ingresos por Comisión', valor: 'Bs 3.250' },
    { titulo: 'Tiempo Promedio', valor: '22 min' }
  ];

  configuracion = {
    email: true,
    sms: true,
    reportes: false
  };

  adminPerfil = {
    nombre: 'admin',
    apellidos: 'Administrador',
    email: 'dbanegas205@gmail.com',
    telefono: '70000000',
    direccion: 'Santa Cruz, Bolivia',
    ciudad: 'Santa Cruz',
    cargo: 'Administrador'
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const adminGuardado = localStorage.getItem('admin_logueado');

      if (adminGuardado) {
        try {
          const data = JSON.parse(adminGuardado);

          this.admin.nombre = data.nombre || 'admin';
          this.admin.email = data.email || 'admin@emergauto.com';

          this.adminPerfil.nombre = data.nombre || 'admin';
          this.adminPerfil.email = data.email || 'admin@emergauto.com';
        } catch (error) {
          console.error('Error al leer admin_logueado desde localStorage:', error);
        }
      }
    }
  }

  mostrarPerfil(): void {
    this.selectedMenu = 'perfil';
  }

  setMenu(menu: string): void {
    this.selectedMenu = menu;
  }

  cerrarSesion(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('admin_logueado');
    }

    this.router.navigate(['/admin-login']);
  }
}