//Tutorial 4 - Operators in JavaScript

//comments in javascript
//this is a single line comment
/* this is multiline comment syntax */
//use ctrl + / to comment multiple lines


//Arithmetic Operators 

let x = 10;
let y = 3;
let z = x + y;
console.log('X: ',x,'and','Y: ',y);
console.log('X + Y: ',x + y); //13
console.log('X + Y: ', z);
console.log('X - Y: ',x - y); //7
console.log('X * Y: ',x * y); //30
console.log('X / Y: ',x / y); //3.3333333333333335
console.log('X % Y: ',x % y); //gives remainder 1
console.log('X ** Y: ',x ** y); //give x to the power of y

//Unary Operators
console.log('X++: ',x++); //post increment 10
console.log('X: ',x); //11
console.log('++X: ',++x); //pre increment 12
console.log('X: ',x); //12
console.log('X--: ',x--); //post decrement 12
console.log('X: ',x); //11
console.log('--X: ',--x); //pre decrement 10
console.log('X: ',x); //10

//Assignment Operators

let a = 5;
let b = 6;

c = a += b; //a = a + b
d = a -= b; //a = a - b
e = a += 5; //a = a + 5
f = b -= 3; //b = b - 3
g = a *= 2; //a = a * 2
h = b /= 2; //b = b / 2
i = a %= 3; //a = a % 2
j = a **= 2; //a = a ** 2

console.log('A: ',a,'and','B: ',b);
console.log('C: ',c);
console.log('D: ',d);
console.log('E: ',a); //10
console.log('F: ',b); //3
console.log('G: ',g); //20
console.log('H: ',h); //1.5
console.log('I: ',i); //1   
console.log('J: ',j); //100

//Comparison Operators
let p = 10;
let q = 20;
let r = '10';

console.log('P: ',p,'and','Q: ',q);
console.log('P > Q: ',p > q); //greater than
console.log('P < Q: ',p < q); //less than
console.log('P >= Q: ',p >= q); //greater than or equal to
console.log('P <= Q: ',p <= q); //less than or equal to
console.log('P == Q: ',p == q); //equal to
console.log('P != Q: ',p != q); //not equal to
console.log('P == R: ',p == r); //converting to same type
console.log('P === R: ',p === r); //strict equality and does not convert to same type
console.log('P !== R: ',p !== r); //strict inequality and does not convert to same type 

//Logical Operators

//this operator gives true or false as output

let condition1 = p<q;
let condition2 = p===r;

console.log('Condition1: ',condition1);
console.log('Condition2: ',condition2);
console.log('Condition1 && Condition2: ',condition1 && condition2); //AND operator
console.log('Condition1 || Condition2: ',condition1 || condition2); //OR operator
console.log('!Condition1: ',!condition1); //NOT operator and change the value if true then false and vice versa.

/*This is simple explanation for Logical Operators
**And, OR Operator**

cond1 cond2  &&   ||
  t     t    t    t
  t     f    f    t
  f     t    f    t
  f     f    f    f

*/