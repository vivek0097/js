//-----hoisting-------------------------------

// getName();
// console.log(x)


// var x  = 7;

// function getName(){
//     console.log("hello world")
// }


// var getName2 = function (){
//     console.log("hello world")
// }



// var getName = () =>{
//     console.log("hello world")
// }



//--------------------variables-----------------
// var a = 10;
// let b = 20;
// const c = 30;

// a = 15; 
// b = 25; 
// c = 35;

// console.log(a)
// console.log(b)
// console.log(c)  // --Error (cannot reassign)



//----------------function envocation----------
var x= 1;
a();
b();
console.log(x);


function a(){
    var x = 10;
    console.log(x);
}


function b(){
    var x = 100;
    console.log(x)
}



//-------------------functions ----------------
function makeCoffee(type) {
  return `Here is your ${type} coffee `;
}

console.log(makeCoffee("Latte"));
console.log(makeCoffee("Cappuccino"));
