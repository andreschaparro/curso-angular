import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  // Atributo para probar el one way binding o interpolación
  valorContador: number = 0;

  // Métodos para probar el event binding
  incrementar(): void {
    this.valorContador++;
  }

  decrementar(): void {
    this.valorContador--;
  }
}
