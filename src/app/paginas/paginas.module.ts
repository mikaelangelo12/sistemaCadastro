import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { CadastroComponent } from './conteudo/cadastro/cadastro.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent,
    BarraLateralComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ CabecalhoComponent, RodapeComponent, BarraLateralComponent]
})
export class PaginasModule { }
