"use strict" 

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Vamos a filtrar los inventores que nacieron en el siglo XVI (1500-1599).

const bornFifteen = inventors.filter( function(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599){
    return true;
  }else {
    return false;
  }
})

  // Así se haría en una función arrow.
   const bornFifteenArrow = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))

console.table(bornFifteenArrow);

// Array.prototype.map()
// 2. Vamos a hacer un array que nos devuelva los nombres y apellidos de los inventores.

const inventorsNames= inventors.map (inventor=> `${inventor.first} ${inventor.last}`);
console.table(inventorsNames);

// Array.prototype.sort()
// 3. Vamos a recolocar los inventores por el año de nacimiento. El más mayor el primero y el más joven el último.

const inventorsBirth = inventors.sort(function (a,b) {
  if (a.year > b.year){
    return 1;
  }else {
    return -1;
  }
});
console.table(inventorsBirth);

  // Ahora con función arrow:

  const inventorsBirth2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );

  console.table(inventorsBirth2);

// Array.prototype.reduce()
// 4. Vamos a calcular cuántos años vivieron en total todos los inventores.
  // con un for
  let years = 0;

  for (let i = 0; i < inventors.length; i ++){
    years += inventors[i].passed - inventors[i].year
  } 
  console.log(years);

  // con Reduce.
  const totalYears = inventors.reduce((total, inventor)=> {
    //vamos a conseguir un total sumando el resultado de los años vividos por los inventores... y cada vez que se haga el loop, se irá añadiendo al total.
    return total + (inventor.passed - inventor.year);
    //para que no nos de un resultado undefined [object object...], tenemos que darle un número de inicio al total, en este caso es 0.
  }, 0);

  console.log(totalYears);

// 5. Sort de inventores por edad.

const yearsLived = inventors.sort (function(a,b){
  //tenemos que crear una base con la que comparar. en este caso, un sujeto que represente al mayor (a) y otro que represente al joven (b)
const oldestInventor = a.passed - a.year;
const yougestInventor = b.passed - b.year;
  // y, por supuesto, hacer la condicional para ordenarlos. (se puede hacer también con un ternario).
if(oldestInventor > yougestInventor){
  return -1;
} else {
  return 1;
}
});
console.table(yearsLived);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];



// 6. sort Exercise
// Sort the people alphabetically by last name


// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];