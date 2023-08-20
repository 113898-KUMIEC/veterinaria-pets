import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule



import { AppComponent } from './app.component';
import { VeterinariaColorComponent } from './veterinaria-color.component';
import { MascotaComponent } from './mascota/mascota.component';
import { ImagenComponent } from './imagen/imagen.component';
import { OpacidadRangoComponent } from './opacidad-rango/opacidad-rango.component';
import { CargaComponent } from './carga/carga.component';
import { TituloComponent } from './titulo/titulo.component';
import { CalcularEdadPipe } from './mascota/edad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VeterinariaColorComponent,
    MascotaComponent,
    ImagenComponent,
    OpacidadRangoComponent,
    CargaComponent,
    TituloComponent,
    CalcularEdadPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
