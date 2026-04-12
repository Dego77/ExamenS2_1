import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-taller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-taller.component.html',
  styleUrl: './panel-taller.component.css'
})
export class PanelTallerComponent implements OnInit {
  taller = {
    nombre: 'Taller Central',
    email: 'taller@emergauto.com'
  };

  selectedMenu = 'dashboard';

  resumen = [
    { titulo: 'Servicios Asignados', valor: 12, detalle: '+3 hoy', icono: '📋' },
    { titulo: 'Servicios Completados', valor: 28, detalle: 'Este mes', icono: '✅' },
    { titulo: 'Servicios Activos', valor: 4, detalle: 'En proceso', icono: '🕒' },
    { titulo: 'Ingresos del Mes', valor: 'Bs 4.850', detalle: 'Servicios realizados', icono: '💰' }
  ];

  solicitudesActivas = [
    {
      servicio: 'Cambio de Neumático',
      cliente: 'Juan Pérez',
      ubicacion: 'Av. Banzer, 4to anillo',
      estado: 'En camino',
      tecnico: 'Carlos Rojas',
      fecha: '2026-04-11'
    },
    {
      servicio: 'Carga de Batería',
      cliente: 'Ana López',
      ubicacion: 'Equipetrol Norte',
      estado: 'Pendiente',
      tecnico: 'Luis Mendoza',
      fecha: '2026-04-11'
    }
  ];

  historial = [
    {
      servicio: 'Grúa y Remolque',
      cliente: 'Mario Suárez',
      estado: 'Completado',
      monto: 'Bs 250',
      fecha: '2026-04-09'
    },
    {
      servicio: 'Apertura de Vehículo',
      cliente: 'Sandra Roca',
      estado: 'Completado',
      monto: 'Bs 120',
      fecha: '2026-04-08'
    },
    {
      servicio: 'Carga de Batería',
      cliente: 'Pedro Gómez',
      estado: 'Completado',
      monto: 'Bs 90',
      fecha: '2026-04-07'
    }
  ];

  perfilTaller = {
    nombre: 'Taller Central',
    encargado: 'Luis Rojas',
    email: 'taller@emergauto.com',
    telefono: '70809000',
    direccion: 'Santa Cruz, Bolivia',
    ciudad: 'Santa Cruz',
    especialidad: 'Mecánica general y auxilio vehicular'
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tallerGuardado = localStorage.getItem('taller_logueado');

      if (tallerGuardado) {
        try {
          const data = JSON.parse(tallerGuardado);

          this.taller.nombre = data.nombre || 'Taller Central';
          this.taller.email = data.email || 'taller@emergauto.com';

          this.perfilTaller.nombre = data.nombre || 'Taller Central';
          this.perfilTaller.email = data.email || 'taller@emergauto.com';
        } catch (error) {
          console.error('Error al leer taller_logueado:', error);
        }
      }
    }
  }

  setMenu(menu: string): void {
    this.selectedMenu = menu;
  }

  mostrarPerfil(): void {
    this.selectedMenu = 'perfil';
  }

  cerrarSesion(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('taller_logueado');
    }

    this.router.navigate(['/login']);
  }
}