'use strict';
function getYearOfBirth(age){
  if (age < 0 ){
    throw new Error('Age cannot be negative');
  }
  return 2019-age;
}

function createGreeting(name, age){
  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I am ${age}. I was born in ${yearOfBirth}.`;
}


try {
  const greeting1 = createGreeting('wesley',33);
  console.log(greeting1);
} catch(error) {
  console.log(error);
}