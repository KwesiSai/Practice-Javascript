// let answer = prompt('Having fun?').toLowerCase();
// if(answer==="yes",'yeah','yep','yah'){
//     console.log("Wonderful wonderful, i am glad you are havivng fun" );
// }
// else if(answer==="no"){
//     console.warn("You are not loved at home!!!!")
// }
// else{
//     console.log("hmm, enjoy the rest of your day");
// }

let password= prompt("Enter a password");
if(password.length>=6 && password.indexOf(' ')===-1){
    console.log("Valid Password");
}
else{
    console.error("Password is either too short or has a space or both!")
}

let array1 =['cat','blue',98];
let array2= ['weel','dog',99];
let combo= array1.concat(array2);

//Creating and accessing nested arrays/multidimensional array.
//creating an imaginary board game(three in a row)

let boardgame=[['X',null,'O'],['O','X',null],[null,'O','X']];

//To access array elements you need to speficy index of outer array, and index of specific inner array.
let lastrowlastcolumn = boardgame[2][2];

