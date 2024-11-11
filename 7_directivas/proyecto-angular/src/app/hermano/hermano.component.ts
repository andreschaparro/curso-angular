import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})

// Se utiliza uno de los estados del ciclo de vida del componente que es OnInit (cuando se inicializa)
export class HermanoComponent implements OnInit {
  // Inyección de un servicio por constructor
  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ) { }

  ngOnInit(): void {
    // Hermano es el hermano menor, por lo que llamo al setter cuando se inicializa el componente y le paso el nombre
    this._servicioFamiliar.setHermanoMenor('Pedro');
    // Guardo localmente el nombre con el getter
    this.nombre = this._servicioFamiliar.getHermanoMenor();
  }

  nombre?: string;

  // El servicio permite reutilizar los métodos del servicio que no son ni getters ni setters
  // Además, sirve como pivot de intercambio de información entre ambos componentes
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor());
  }

  preguntarPorHijo() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
