import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroModule } from './cadastro/cadastro.module';
import { BarraLateralModule } from '../barra-lateral/barra-lateral.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CadastroModule,
  ]
})
export class ConteudoModule { }
