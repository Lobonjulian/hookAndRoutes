# Routes v6

<p> React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React.
React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.</p>

<code>
npm i react-router-dom
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

### Parámetros de búsqueda
- React Router hace que sea fácil de leer y manipular los parámetros de búsqueda con useSearchParams
- El useSearchParams se utiliza para leer y modificar la cadena de consulta en la URL de la ubicación actual.
- Funciona de manera muy similar, React.useState() pero almacena y establece el estado en los parámetros de búsqueda de URL en lugar de en la memoria.

# React Router v.6.4

<h6>Version especifica</h6>

<code>npm install react-router-dom@6.4</code>

<h2>Agregar Enrutador</h2>

<p>Lo primero que debemos hacer es crear un enrutador de navegador y configurar nuestra primera ruta. Esto habilitará el enrutamiento del lado del cliente para nuestra aplicación web.</p>

#### createBrowserRouter

<p> Este es el enrutador recomendado para todos los proyectos web de React Router. Utiliza DOM history API para actualizar la URL y administrar la pila de historial. </p>

<p>También habilita la data API v6.4 como loaders, actions, fetchers y más.</p>

## NavLink 

<p>es un componente especializado para crear enlaces de navegación. Este componente se utiliza para crear enlaces de navegación que se activan cuando la ruta coincide con la URL actual.</p>

<p>De forma predeterminada se utiliza la clase CSS active para marcar el enlace como activo.</p>