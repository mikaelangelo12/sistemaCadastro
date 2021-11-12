import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialSistemaDeCadastro } from 'src/material.module';


@NgModule({
  declarations: [BarraLateralComponent,],
  imports: [
    CommonModule,
    MaterialSistemaDeCadastro,
    AppRoutingModule,
  ],
  exports:[ BarraLateralComponent]
})
export class BarraLateralModule { }
