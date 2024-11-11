# Angular CLI

## Instalar la última versión 16 LTS

1. Verificar la última versión LTS en https://www.npmjs.com/package/@angular/cli?activeTab=versions.
2. Ejecutar `npm i -g @angular/cli@16.2.16`

## Instalar la última versión 17 LTS

1. Verificar la última versión LTS en https://www.npmjs.com/package/@angular/cli?activeTab=versions.
2. Ejecutar `npm i -g @angular/cli@17.3.11`

## Desinstalar todas las versiones

1. Ejecutar `npm unistall -g @angular/cli`

## Crear una app

1. Ejecutar `ng new proyecto-angular`.
2. Seleccionar `y` para agregar `Angular routing`.
3. Seleccionar `CSS`.

## package.json

Es un archivo que contiene:

1. La configuración del proyecto.
2. Los scripts que se pueden ejecutar con node:

- `npm start` corre el proyecto de Angular en un servidor local, de la misma forma que lo hacia el Live Server.
- `npm build` compila el proyecto de Angular para generar los archivos: HTML, CSS, y JS. Los mismos, se utilizan para levantar el sitio web.

3. Las depencencias necesarias para poder ejecutar el `npm start`.
4. Las depencencias necesarias para poder ejecutar el `npm build`.

## angular.json

1. Dentro de `build > options > assets` se encuentra una lista con la ruta de los archivos estáticos y la del favicon.
2. Dentro de `build > options > styles` se encuentra una lista con las rutas de los archivos de estilo CSS.
3. Dentro de `build > options > scripts` se encuentra una lista con las rutas de las bibliotecas externas de JS.

## Instalar las dependencias luego de descargar un proyecto

Las mismas, se instalan dentro del directorio `node_modules`.

1. Ejecutar `npm install`.
