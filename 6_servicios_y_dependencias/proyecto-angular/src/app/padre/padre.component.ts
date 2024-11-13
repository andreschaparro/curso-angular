import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent implements OnInit {

  // Alternativa para inyectar un servicio utilizando
  _servicioFamiliar = inject(ServicioFamiliarService);

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Juan');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  nombre?: string;

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

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor());
  }

  preguntarPorHijo() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
