import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


import { ConteudoModule } from './conteudo/conteudo.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraLateralModule } from './barra-lateral/barra-lateral.module';


@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent,



  ],
  imports: [
    CommonModule,
    BarraLateralModule,
    ConteudoModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[ CabecalhoComponent, RodapeComponent]
})
export class PaginasModule { }
