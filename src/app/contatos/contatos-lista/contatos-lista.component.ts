import { Component, OnInit } from '@angular/core';
import { ContatoService } from "../contato.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.scss']
})
export class ContatosListaComponent implements OnInit {

  contatos: any

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.getContatosList()  
  }

  getContatosList(){
    this.contatoService.getContatosList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val() }))
        )
    ).subscribe(contatos =>{
      this.contatos = contatos
    })
  }

  deleteContatos(){
    this.contatoService.deleteAll()
    .catch(
      erro=> console.log(erro)
    )
  }
}
