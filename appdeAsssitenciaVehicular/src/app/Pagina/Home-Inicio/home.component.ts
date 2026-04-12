import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeSection = 'inicio';

  setActive(section: string): void {
    this.activeSection = section;
  }

  servicios = [
    {
      icono: '🚚',
      titulo: 'Grúa y Remolque',
      descripcion: 'Transporte seguro de tu vehículo a cualquier destino'
    },
    {
      icono: '🔧',
      titulo: 'Cambio de Neumático',
      descripcion: 'Asistencia rápida para cambio de ruedas en carretera'
    },
    {
      icono: '🔋',
      titulo: 'Carga de Batería',
      descripcion: 'Arranque de emergencia y carga de batería'
    },
    {
      icono: '⛽',
      titulo: 'Suministro de Combustible',
      descripcion: 'Llevamos combustible donde lo necesites'
    },
    {
      icono: '🔑',
      titulo: 'Apertura de Vehículos',
      descripcion: 'Servicio de apertura sin daños'
    },
    {
      icono: '🛡️',
      titulo: 'Asistencia Completa',
      descripcion: 'Soluciones integrales para emergencias vehiculares'
    }
  ];

  beneficios = [
    'Servicio 24/7 todos los días del año',
    'Tiempo de respuesta menor a 30 minutos',
    'Profesionales certificados y experimentados',
    'Cobertura en toda la ciudad',
    'Precios transparentes sin sorpresas'
  ];

  testimonios = [
    {
      nombre: 'María González',
      texto: 'Excelente servicio. Llegaron en 20 minutos y resolvieron mi problema rápidamente. Muy profesionales.'
    },
    {
      nombre: 'Carlos Rodríguez',
      texto: 'La mejor asistencia en carretera. Personal amable y precios justos. Totalmente recomendable.'
    },
    {
      nombre: 'Ana Martínez',
      texto: 'Disponibles 24/7 como prometen. Me sacaron de un apuro en plena madrugada. Gracias.'
    }
  ];
}