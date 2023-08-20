import { Component } from '@angular/core';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {
  mascotas: any[] = [
    {
      nombre: 'Firulais',
      raza: 'Golden Retriever',
      sexo: 'Macho',
      anioNacimiento: 2020,
      tutor: 'Juan Pérez',
      anio : 2020
    },
    {
      nombre: 'Luna',
      raza: 'Labrador',
      sexo: 'Hembra',
      anioNacimiento: 2019,
      tutor: 'María Rodríguez',
      anio : 2019
    },
    {
      nombre: 'Roman',
      raza: 'Callejero',
      sexo: 'Macho',
      anioNacimiento: 2007,
      tutor: 'Boca',
      anio : 2007
    },
  ];

  incrementarEdad(mascota: any) {
    const a = mascota.anioNacimiento--;
    this.calcularEdad(a)
  }
  
  calcularEdad(anioNacimiento: number): number {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
  }
  
  opacidad: number = 1;

  cambiarOpacidad(nuevaOpacidad: number) {
    this.opacidad = nuevaOpacidad;
  }

  mostrarMascota: boolean = true; // Variable para determinar si se muestra la mascota

  toggleMostrarMascota() {
    this.mostrarMascota = !this.mostrarMascota;
  }
}