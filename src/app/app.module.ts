import { NgModule, isDevMode } from '@angular/core';
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
import { YoutubeUrlPipe } from './youtube-url.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './login/login.component';
import { AccesibilidadComponent } from './accesibilidad/accesibilidad.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraficaComponent } from './grafica/grafica.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PregfrecuentesComponent } from './pregfrecuentes/pregfrecuentes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { SignupComponent } from './signup/signup.component';
import { DeleteUserComponent } from './DeleteUser/DeleteUser.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    CalendarioComponent,
    YoutubeUrlPipe,
    LoginComponent,
    AccesibilidadComponent,
    GraficaComponent,
    ReservacionesComponent,
    UsuariosComponent,
    PregfrecuentesComponent,
    ContactanosComponent,
    SignupComponent,
    DeleteUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }