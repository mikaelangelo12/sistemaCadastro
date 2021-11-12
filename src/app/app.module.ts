import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginasModule } from './paginas/paginas.module';
import { BarraLateralModule } from './paginas/barra-lateral/barra-lateral.module';
import { MaterialSistemaDeCadastro } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialSistemaDeCadastro,
    AppRoutingModule,
    PaginasModule,
    BarraLateralModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
