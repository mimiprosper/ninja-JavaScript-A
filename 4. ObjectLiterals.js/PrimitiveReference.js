// primitive value
// let scoreOne = 50;
// let scoreTwo = scoreOne
// console.log(scoreOne, scoreTwo);

// scoreOne = 100;
// console.log(scoreOne, scoreTwo);

// reference value
const userOne = { name: 'emma', age: 45};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40;
userOne.name = 'luke'
console.log(userOne, userTwo);