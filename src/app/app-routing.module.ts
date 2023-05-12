import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'habitaciones', component: HabitacionesComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'servicios', component: ReservacionComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
