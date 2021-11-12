import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './paginas/conteudo/cadastro/cadastro/cadastro.component';

const routes: Routes = [
  {
    path:'cadastro',
    component: CadastroComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
