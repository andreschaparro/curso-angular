// Importaciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';

// @ es un decorador
// @NgModule nos permite configurar el módulo
@NgModule({
  declarations: [
    AppComponent,
    // Se importó automáticamente en el módulo el componente se creó
    PadreComponent,
    // Se importó manualmente
    HijoComponent,
    HermanoComponent,
    EstiloHermanosDirective
  ],
  imports: [
    // Hay módulos dentro de módulos formando un árbol
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // Este bootstrap no es la biblioteca gráfica
  // Indica que se va a renderizar
  bootstrap: [AppComponent]
})

// El export del módulo
export class AppModule { }