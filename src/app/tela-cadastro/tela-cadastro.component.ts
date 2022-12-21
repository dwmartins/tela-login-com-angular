import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit{
  formuulario: any;

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
    alert("Logado com sucesso!")
  }
}
