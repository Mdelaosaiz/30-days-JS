// fissbuzz
// si un número es múltiplo de 3 tiene que decir fiss
// si un número es múltiplo de 5 tiene que decir buzz
// siun número es múltiplo de 3 y de 5, tiene que decir FizzBuzz

for (let i = 0; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} fissbuzz`);
  }else if (i%3 === 0){
    console.log(`${i} fiss`);
  }else if (i % 5 === 0){
     console.log(`${i} buzz`);
  }
}