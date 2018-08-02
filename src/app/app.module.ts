import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { SistemaComponent } from './sistema/sistema.component';
import { AdministrativoComponent } from './sistema/administrativo/administrativo.component';
import { NavbarComponent } from './sistema/administrativo/navbar/navbar.component';
import { FooterComponent } from './sistema/administrativo/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    AdministrativoComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
