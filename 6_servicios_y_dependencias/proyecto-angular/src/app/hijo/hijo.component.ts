// Este componente se creó manualmente sin el Angular CLI
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  // Atributo creado con @Input para recibir el string del padre
  @Input() recibeHijo: string = '';

  // Atributo creado con el string que se envía al padre
  enviaHijo: string = 'Mensaje del hijo';

  // Atributo creado con @Output y de la clase EventEmitter utilizando generic types para indicar que se envía un string
  @Output() emitterHijo = new EventEmitter<string>();

  // Aatributos para que los botones del contador se encuentren en el hijo
  @Output() emitterIncrementar = new EventEmitter<void>();
  @Output() emitterDecrementar = new EventEmitter<void>();

  // Método para enviar el evento emmiterHijo que contiene el string enviaHijo 
  enviarMensaje() {
    this.emitterHijo.emit(this.enviaHijo);
  }

  // Métodos para que los botones del contador emitan eventos al padre
  incrementarDesdeElHijo(): void {
    this.emitterIncrementar.emit()
  }

  decrementarDesdeElHijo(): void {
    this.emitterDecrementar.emit()
  }
}
