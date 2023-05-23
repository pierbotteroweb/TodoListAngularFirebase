import { CriarContatoComponent } from "./contatos/criar-contato/criar-contato.component";
import { ContatosListaComponent } from "./contatos/contatos-lista/contatos-lista.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContatosListaComponent },
  { path: 'adicionar', component: CriarContatoComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
