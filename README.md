# Routes v6

<p> React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React.
React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.</p>

<code>
npm i react-router-dom@6
</code>

#### enrutador

Si bien su aplicación solo usará un solo enrutador, hay varios enrutadores disponibles según el entorno en el que se esté ejecutando su aplicación.

Los siguientes enrutadores no admiten las API de datos:

1. BrowserRouter
2. MemoryRouter
3. HashRouter
4. NativeRouter
5. StaticRouter

## BrowserRouter
Lo primero es lo primero, queremos conectar su aplicación a la URL del navegador: importarla BrowserRouter y renderizarla alrededor de toda su aplicación.

BrowserRouter Es el componente que se encarga de conectar su aplicación a la URL del navegador.

## Agregar Rutas
- src/routes/About.jsx
- src/routes/Contacto.jsx
- src/routes/Inicio.jsx

## Rutas anidadas (Layout)

Las rutas anidadas se pueden usar para crear un diseño de página (Layout) que se repite en varias páginas.

1. Observe que tiene el index prop en lugar de path.
Eso es porque la ruta del índice comparte la ruta del padre.
2. Las rutas de índice coinciden cuando una ruta principal coincide, pero ninguna de las otras secundarias coincide.
3. Las rutas de índice son la ruta secundaria predeterminada para una ruta principal.
4. Las rutas de índice se representan cuando el usuario aún no ha hecho clic en uno de los elementos de una lista de navegación.