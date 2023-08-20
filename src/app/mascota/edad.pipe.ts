import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularEdad'
})
export class CalcularEdadPipe implements PipeTransform {
  transform(anioNacimiento: number): string {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const edad = anioActual - anioNacimiento;
    return `${edad} años`;
  }
}
