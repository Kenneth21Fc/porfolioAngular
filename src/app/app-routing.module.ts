import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import {EncabezadoComponent} from './componentes/encabezado/encabezado.component';

const routes: Routes = [
  { path: 'home', component:EncabezadoComponent},
  {path: 'skils/projects' , component: BiografiaComponent},
  {path: 'contactame', component : ContactameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
