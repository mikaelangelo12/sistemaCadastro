import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {

  menuCadastro = "Cadastro"
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.conteudoCadastro()
  }
  conteudoCadastro(){
    this.router.navigate(['cadastro'])
  }

}
