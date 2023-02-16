import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ProyrctosComponent } from './componentes/proyrctos/proyrctos.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { HttpClientModule} from '@angular/common/http';
import { RedesComponent } from './componentes/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    EncabezadoComponent,
    BiografiaComponent,
    ProyrctosComponent,
    ContactameComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
