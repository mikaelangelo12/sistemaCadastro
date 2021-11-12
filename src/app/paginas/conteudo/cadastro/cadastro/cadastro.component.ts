import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  primeiro: FormGroup | any ;
  segundo: FormGroup | any;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new ErrorStateMatcher();
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.primeiro = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.segundo = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

  }
}


