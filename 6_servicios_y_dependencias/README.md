# Capítulo 6: servicios

Permiten inyectar una misma lógica a varios componentes (para reutilizar código) y proveen un mecanismo pivot para intercambiar información entre componentes.

## Crear un servicio

1. Ejecutar `ng generate service nombre-del-servicio` o de forma resumida `ng g s nombre-del-servicio`.

Un servicio esta formado por dos archivos, siendo uno de ellos obligatorio:

- `nombre-del-servicio.service.ts`: contiene el servicio.
- `nombre-del-servicio.service.spec.ts`: es un archivo opcional para testing. Borrarlo.
