import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialSistemaDeCadastro } from 'src/material.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialSistemaDeCadastro,
    ReactiveFormsModule,
  ],

})
export class CadastroModule { }
