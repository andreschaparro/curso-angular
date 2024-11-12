# Capítulo 9: bootstrap

## Limpiar el proyecto de Angular

1. Borrar `app.component.spec.ts`.
2. Borrar todo el contenido de `app.component.html`, excepto la línea que dice `<router-outlet></router-outlet>`.

## Instalar bootstrap

1. Ejecutar `npm i bootstrap@5.3.3`.

## Modificar angular.json

1. Dentro de `build > options > styles` agregar `node_modules/bootstrap/dist/css/bootstrap.min.css`.
2. Dentro de `build > options > scripts` agregar `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`.
