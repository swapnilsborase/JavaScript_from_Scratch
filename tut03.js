//Tutorial 3 - Data Types in JavaScript

//Primitive Data Types

let fname = 'Swapnil';
console.log(fname, typeof(fname)); //String

let ab = null;
console.log(typeof(ab)); //Object

let x = BigInt(1234); // Displays 1234n & n is used to represent BigInt
console.log(x, typeof(x)); //BigInt

let y = Symbol('This is a symbol');
console.log(y, typeof(y)); //Symbol

//Non-Primitive Data Types

//Object and stores 'key:value' pairs

const student = {
fullName: 'Swapnil',
age: 25,
marks: 90,
university : 'BCU',
location: 'Birmingham'
};

console.log(student); //{ fullName: 'Swapnil', age: 25, marks: 90, university: 'BCU', location: 'Birmingham' }
console.log(typeof(student)); //Object
console.log(student.fullName); //get the value of fullName
console.log(student.university); //get the value of age
console.log(student.location = 'London'); //change the value of location
console.log(student);
console.log(student.age + 2);//add 2 to the age
console.log(student.fullName,student.location,student.age);
