// Importaciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @ es un decorador
// @NgModule nos permite configurar el módulo
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Hay módulos dentro de módulos formando un árbol
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // Este bootstrap no es la biblioteca gráfica
  // Indica que se va a renderizar
  bootstrap: [AppComponent]
})

// El export del módulo
export class AppModule { }
