import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { Contato } from '../contato';
import { ContatoService } from "../contato.service";


@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.scss']
})
export class CriarContatoComponent implements OnInit {

  contato: Contato = new Contato()
  enviado = false

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
  }

  novoContato(): void {
    this.enviado = false
    this.contato = new Contato()
  }

  salvar(){
    this.contatoService.createContato(this.contato)
    this.contato = new Contato()
  }

  onSubmit(){
    this.enviado = true
    this.salvar()
  }
}
