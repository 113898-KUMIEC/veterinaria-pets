import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit{
  porcentajeCarga: number = 0;
  totalMascotas: number = 0;
  mascotasCargadas: number = 2;

  ngOnInit() {
    this.totalMascotas = this.calcularTotalMascotas(); 
    this.simularCarga();
  }

  calcularTotalMascotas(): number {
    return 10;
  }

  simularCarga() {
    const intervalo = setInterval(() => {
      if (this.mascotasCargadas < this.totalMascotas) {
        this.mascotasCargadas++;
        this.porcentajeCarga = (this.mascotasCargadas / this.totalMascotas) * 100;
      } else {
        clearInterval(intervalo);
      }
    }, 100); 
  }
}
