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

## Loader y useLoaderData

<p> Hay dos API que usaremos para cargar datos loader y useLoaderData. Primero crearemos y exportaremos una función de cargador en el módulo raíz, luego la conectaremos a la ruta. Finalmente, accederemos y renderizaremos los datos. </p>

## useNavigation#
<p>Este gancho le dice todo lo que necesita saber sobre la navegación de una página para crear indicadores de navegación pendientes y una interfaz de usuario optimista sobre mutaciones de datos. </p>

<p>navigation: Devuelve el estado de navegación actual: puede ser uno de "idle" | "submitting" | "loading".</p>

#### Error data
Si la solicitud falla, podemos activar un error de datos para que el usuario pueda volver a intentarlo.

# Contex API

- Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

- Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.

- Si trabajas con diferentes vistas estas no estarán anidadas, por ende Context proporciona una solución

## Redux vs Context#

Redux proporciona un conjunto de herramientas completo para administrar el estado:
1. Viene con un depurador que viaja en el tiempo.
2. Proporciona una API de middleware que le brinda acceso a herramientas como redux-sagas.
3. Sus enlaces de React evitan muchos renderizados innecesarios.

<p>El contexto no reemplaza a Redux. El contexto no le permitirá viajar en el tiempo con depuración, middleware configurable.</p>

<p>Context es una forma de obtener datos de un lugar a otro. Si desea una herramienta que lo ayude a administrar su estado, Redux es una excelente opción.</p>

## CreateContext

Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.

Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.

El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider.

## Provider

Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.

El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider.

## Private Rutes

Las rutas protegidas son rutas que solo se pueden acceder si el usuario está autenticado. Si el usuario no está autenticado, se redirige a la página de inicio de sesión.