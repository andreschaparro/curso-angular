import { Injectable } from '@angular/core';

// Permite que se pueda inyectar el servicio 
@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoMayor?: string;
  hermanoMenor?: string;

  // Estos métodos se llaman getter
  getHermanoMayor(): string {
    return this.hermanoMayor || '';
  }

  getHermanoMenor(): string {
    return this.hermanoMenor || '';
  }

  // Estos métodos se llaman setter
  setHermanoMayor(hermano: string) {
    this.hermanoMayor = hermano;
  }

  setHermanoMenor(hermano: string) {
    this.hermanoMenor = hermano;
  }

  // Estos son métodos del servicio en particular
  saludar(hermano: string) {
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo(): string {
    return `¿Cómo está tu hijo?`;
  }

  constructor() { }
}
