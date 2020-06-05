# reto-9-js-dev-tools 🚀
Reto 9 JavaScript: Tricks Dev Tools

Noveno reto de JavaScript. Comandos que nos ayudan a obtener información a través del inspector del navegador

👌**Objetivo** Mejorar y conocer nuevos comandos en la consola del navegador. 

### Regular ✔ 
  console.log('')
### Interpolado ✔
  console.log(`Hola ${user.name}`)
### Estilos ✔
  console.log('%c el texto o elemento', 'color: blue; background: grey');
### Warning ✔
  console.warning() genera un warning en la consola
### Error ✔
  console.error() genera un error en la consola
### Info ✔
  console.info() genera un info en la consola
### Testing ✔
  console.assert(1 === 2, 'no es cierto') //en consola solo saldrá el error escrito cuando no se de la condición si ponemos 1 === 1 la consola no dice nada
### Clearing ✔
  console.clear() limpia la consola
### Ver elementos del DOM ✔
  console.dir(text) enseña en consola el elemento y todos los atributos
### Agrupar elementos ✔
  console.group(`${array}`)
  más información con consoles
  console.groupEnd(`${arrya}`)
  Aparecen los elementos agrupados por lo que hayamos escrito en el console.group, muestra los elementos desplegados. .console.groupCollaped muestra los elementos colapsados
### Contabilizar ✔
  console.count(''); 
  cuenta todos los elementos que consoleemos, indicando el número de elementos iguales. 
### Tiempo ✔
  console.time('fetch');
  se realiza el fetch
  console.timeEnd('fetch');
  Calcula el tiempo que tarda en traer la información del fetch
### Table ✔
  console.table()
  devuelve los elementos con en una tabla