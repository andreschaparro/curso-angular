import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  valorContador: number = 0;

  // Atributo para enviar un string al hijo
  enviaPadre: string = 'Mensaje del padre';

  // Atributo para recibir un string del hijo
  recibePadre: string = '';

  // Método para actualizar el atributo recibePadre
  recibirMensaje($event: string) {
    this.recibePadre = $event;
  }

  incrementar(): void {
    this.valorContador++;
  }

  decrementar(): void {
    this.valorContador--;
  }
}
