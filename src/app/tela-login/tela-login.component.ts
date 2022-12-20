import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  tipoInput: string = "password";
  aberto: boolean = false;

  public iconEye(): void {
    if(this.aberto == false) {
      this.aberto = true;
      this.tipoInput = "text";
    } else {
      this.aberto = false;
      this.tipoInput= "password";
    }
  }

  constructor(){

  }

  ngOnInit() {
  }
}
