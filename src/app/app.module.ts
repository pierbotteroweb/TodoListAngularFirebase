import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";


import { AppComponent } from './app.component';
import { ContatosDetalhesComponent } from './contatos/contatos-detalhes/contatos-detalhes.component';
import { ContatosListaComponent } from './contatos/contatos-lista/contatos-lista.component';
import { CriarContatoComponent } from './contatos/criar-contato/criar-contato.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosDetalhesComponent,
    ContatosListaComponent,
    CriarContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
