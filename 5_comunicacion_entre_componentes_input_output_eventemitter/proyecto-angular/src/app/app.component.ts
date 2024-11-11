// Importaciones
import { Component } from '@angular/core';

// Decorador para configurar el componente
@Component({
  // Este es el componente app-root que se renderiza en index.html
  selector: 'app-root',
  // En estos dos archivos se define la vista
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// El export del componente
export class AppComponent {
  // Ejecutar npm strart y modificar está línea para ver como cambia la página
  title: string = 'Pedro';
  subtitle: string = 'es la persona que esta logueada'
}
