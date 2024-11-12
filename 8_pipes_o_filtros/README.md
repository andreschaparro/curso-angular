# Pipes o filtros

Permiten formatear y transformar como se ven los datos en la vista sin modificarlos. Utilizan el símbolo `|`.

Ya existen algunos por defecto, pero se pueden crear personalizadas.

## Crear un pipe personalizado

1. Ejecutar `ng generate pipe nombre-del-pipe` o de forma resumida `ng g p nombre-del-pipe`.

Un servicio esta formado por dos archivos, siendo uno de ellos obligatorio:

- `nombre-del-pipe.pipe.ts`: contiene la directiva.
- `nombre-del-pipe.pipe.spec.ts`: es un archivo opcional para testing. Borrarlo.
