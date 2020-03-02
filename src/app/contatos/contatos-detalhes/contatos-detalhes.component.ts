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
  editando: boolean = false
  nome: any
  idade: any
  ativo: boolean
  atualizacoes:any={}

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
  }

  atualizaAtivo(): void {
    if(this.ativo){
      this.atualizacoes['ativo']=this.ativo
    }
    if(this.nome){
      this.atualizacoes['nome']=this.nome
    }
    if(this.idade){
      this.atualizacoes['idade']=this.idade
    }
    this.contatoService
    .updateContato(this.contato.key, this.atualizacoes)
    .catch(erro => console.log(erro))
  }

  deletaContato(){
    this.contatoService.deleteContato(this.contato.key)
    .catch(erro => console.log(erro))
  }
}
