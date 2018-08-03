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
import { SideDrawerComponent } from './sistema/administrativo/navbar/side-drawer/side-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    SistemaComponent,
    AdministrativoComponent,
    NavbarComponent,
    FooterComponent,
    SideDrawerComponent
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
