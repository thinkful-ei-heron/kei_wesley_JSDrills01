'use strict';
function createGreeting(name, age){
  const yearOfBirth = 2019 - age;
  return `Hi my name is ${name} and I am ${age}. I was born in ${yearOfBirth}.`;
}
const greeting1 = createGreeting('wesley',33);
console.log(greeting1);

//console.log('Hi my name is Wesley and I am 33');