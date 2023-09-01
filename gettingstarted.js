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