import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CalendarioComponent } from './Calendario/Calendario.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    ReservacionComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
    FooterComponent,
    GaleriaComponent,
    HabitacionesComponent,
      CalendarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }