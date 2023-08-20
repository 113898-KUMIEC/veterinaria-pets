import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-opacidad-rango',
  template: `
    <input type="range" [min]="0" [max]="1" [step]="0.01" [value]="opacidad" (input)="cambiarOpacidad($event)">
  `
})
export class OpacidadRangoComponent {
  @Input() opacidad: number = 1;
  @Output() opacidadCambiada = new EventEmitter<number>();

  cambiarOpacidad(event: any) {
    const nuevaOpacidad = parseFloat(event.target.value);
    this.opacidadCambiada.emit(nuevaOpacidad);
  }
}
