// // let answer = prompt('Having fun?').toLowerCase();
// // if(answer==="yes",'yeah','yep','yah'){
// //     console.log("Wonderful wonderful, i am glad you are havivng fun" );
// // }
// // else if(answer==="no"){
// //     console.warn("You are not loved at home!!!!")
// // }
// // else{
// //     console.log("hmm, enjoy the rest of your day");
// // }

// let password= prompt("Enter a password");
// if(password.length>=6 && password.indexOf(' ')===-1){
//     console.log("Valid Password");
// }
// else{
//     console.error("Password is either too short or has a space or both!")
// }

// let array1 =['cat','blue',98];
// let array2= ['weel','dog',99];
// let combo= array1.concat(array2);

// //Creating and accessing nested arrays/multidimensional array.
// //creating an imaginary board game(three in a row)

// let boardgame=[['X',null,'O'],['O','X',null],[null,'O','X']];

// //To access array elements you need to speficy index of outer array, and index of specific inner array.
// let lastrowlastcolumn = boardgame[2][2];

// //Creating objects, Arrays + Objects nested
// coe ={
//     person1 :{
//         name: "Genesis",
//         age: 22,
//         CWA: 80
//     },
//     person2 :{
//         name: "Emily",
//         age: 21,
//         CWA: 90,
//     },
//     person3 :{
//         name: "Abraham",
//         age: 20,
//         CWA: 100
//     },
//     rating: ['firstclass','secondclass','pass']
// }

//  const secondclass = ['Abraham','Emily','Genesis', 
//                       provostlist= {
//                           best : 'Abraham'
                          
//                       }
                     
            
// ]

// secondclass[3].worst='Genesis'

// //Nested Loops
// let tables=[['Jessica','Amoah','Memphis'],
// ['Jordan', 'Kwesi','Emily'],
// ['Tedeku','Agbemegah','Fiadope']];

// for(let i of tables){
//     let row= i;
//      console.log(`Row `) 
//      for(let j of row) {
//          console.log('    ', j);
//      }
//  }

//  //the for of loop, newer in Javascript
//  const foods =['Banku','Waakye','Beans','Fufu','Jollof Rice']
//  for(let i of foods){
//     console.log(`One of my favorite foods is ${i}`);
//  }

 
 //Functions
 function sumArray(arr){
           let sumOfArray=0;
        for(let i in arr ) {
             sumOfArray+=arr[i];
        }
        console.log(`The sum of the numbers in the array is ${sumOfArray}`)
        return sumOfArray;
 }
function capital(str){
    console.log(`${str} capitalized is ${str.toUpperCase()}`)
}