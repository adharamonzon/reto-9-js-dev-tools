"use strict";

const text = document.querySelector('.text');
const dogs = [
  {
    name: 'Snickers',
    age: 2
  },
  {
    name: 'hugo',
    age: 8
  },
]
const makeGreen = () => {
  text.style.color = "#fabada";
  text.style.fontSize = '50px';
}

text.addEventListener('click', makeGreen);

makeGreen();

//console.log

//Regular 
console.log('Holi');
//Interpolated
console.log(`Hola soy ${dogs[1].name}`);
//Style
console.log('%c Soy un texto', 'font-size:18px; background: green');
//Warning!
console.warn('oooh noooo!!'); //genera un warning en la consola
//Error
console.error('ooh shit!'); //genera un error en la consola
//Info
console.info('Los cocodrilos comen 3 o 4 personas al año') //genera un info en consola
//Testing
console.assert(1 === 2, 'no es cierto') //en consola solo saldrá el error escrito cuando no se de la condición si ponemos 1 === 1 la consola no dice nada
//Clearing
/* console.clear() */ //limpia la consola
//View DOM elements
console.dir(text) //no sólo escribe en consola el elemento, también TODAS sus propiedades
//Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} tiene ${dog.age} años`);
  console.log(`${dog.name} tiene ${dog.age * 7} en años humanos`);
  console.groupEnd(`${dog.name}`)
  //te agrupa la información por lo seleccionado en este caso el nombre, es necesario indicar donde acaba el grupo. 
  // puedes poner .groupCollapsed(`${dog.name}`); aparecen los elementos colapsados 
})
//Counting
console.count('wes');
console.count('wes');
console.count('sara');
console.count('wes');
console.count('sara');
console.count('sara');
console.count('sara');
console.count('wes');
//Timing
console.time('fetching data');
fetch('https://api.github.com/users/webos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
    //necesario el .timeEnd() calcula el tiempo que tarda en traer la información del fetch
  })
//table
console.table(dogs)
//devuelve una tabla con los datos