import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Contato } from "./contato";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private dbCaminho ='/contato'
  contatoRef: AngularFireList<Contato> = null

  constructor(private db: AngularFireDatabase) {
    this.contatoRef = db.list(this.dbCaminho)
   }

   createContato(contato: Contato): void {
     this.contatoRef.push(contato)
   }

   updateContato(key: string, value: any): Promise<void> {
     return this.contatoRef.update(key, value)
   }

   deleteContato(key: string): Promise<void> {
     return this.contatoRef.remove(key)
   }

   getContatosList(): AngularFireList<Contato>{
     return this.contatoRef
   }
   
   deleteAll(): Promise<void>{
     return this.contatoRef.remove()
   }
}
