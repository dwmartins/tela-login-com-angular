import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
formulario: any;

  constructor(){

  }

  ngOnInit() {
  }

  tipoInput: string = "password";
  aberto: boolean = false;

  public iconEye() {
    if(this.aberto == false) {
      this.aberto = true;
      this.tipoInput = "text";
    } else {
      this.aberto = false;
      this.tipoInput= "password";
    }
  }

  public submitForm(form: NgForm) {
    if(form.valid) {
      console.log('campo ok');
    }else {
      console.log('campo vazio');
    }
  }

}
