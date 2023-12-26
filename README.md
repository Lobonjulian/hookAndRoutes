# Hook

## useEffect

<p> useEffect: El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales.</p>

<p>Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.</p>

<p>React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM.</p>

<p>¿Se ejecuta useEffect después de cada renderizado? ¡Sí! Por defecto se ejecuta después del primer renderizado y después de cada actualización.
</p>

### fetch

<p>Una de las funciones más importantes de useEffect es la de hacer peticiones a una API </p>

### async await
<p>También podemos usar async await para hacer peticiones a una API. Pero para ello necesitamos una función async.</p>

## useCallback

<p>useCallback es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como argumento no ha cambiado, useCallback no la volverá a crear. </p>

Necesitas pasar dos cosas a useCallback:

1. Una definición de función que desea almacenar en caché entre renderizaciones.
2. Una lista de dependencias que incluye cada valor dentro de su componente que se usa dentro de su función.