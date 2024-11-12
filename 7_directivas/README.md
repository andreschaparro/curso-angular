# Capítulo 7: directivas

Son instrucciones que van en el HTML y nos permiten modificar el DOM de forma declarativa.

Ya existen algunas por defecto, pero se pueden crear personalizadas.

## Crear una directiva personalizada

1. Ejecutar `ng generate directive nombre-de-la-directiva` o de forma resumida `ng g d nombre-de-la-directiva`.

Un servicio esta formado por dos archivos, siendo uno de ellos obligatorio:

- `nombre-de-la-directiva.directive.ts`: contiene la directiva.
- `nombre-de-la-directiva.directive.spec.ts`: es un archivo opcional para testing. Borrarlo.
