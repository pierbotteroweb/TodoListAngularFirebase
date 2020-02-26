import { Component, OnInit, Input } from '@angular/core';
import { ContatoService } from "../contato.service";
import { Contato } from '../contato';

@Component({
  selector: 'app-contatos-detalhes',
  templateUrl: './contatos-detalhes.component.html',
  styleUrls: ['./contatos-detalhes.component.scss']
})
export class ContatosDetalhesComponent implements OnInit {

  @Input() contato: Contato 

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
  }

  atualizaAtivo(estaAtivo: boolean): void {
    this.contatoService
    .updateContato(this.contato.key, {ativo: estaAtivo})
    .catch(erro => console.log(erro))
  }

  deletaContato(){
    this.contatoService.deleteContato(this.contato.key)
    .catch(erro => console.log(erro))
  }
}
