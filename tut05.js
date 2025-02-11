//Conditional Statements

// if statement

let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}
if(mode === "light"){
    color = "white";
};
console.log('Color: ',color);

// if else statement

let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}else{
    console.log("You are a child");
}

if (mode === "dark") {
    color = "black";
}else{
    color = "white";
}
console.log('Color: ',color);

// else if statement

age2 = 70;

if (age2 >= 18){
    console.log("You can VOTE");
}else if(age2 <= 60){
    console.log("You can't VOTE");
}else{
    console.log("You can't VOTE");
}

//ternary operator

let age3 = 18;

let result = age3 >= 18 ? "You are an adult" : "You are a child";
console.log(result);