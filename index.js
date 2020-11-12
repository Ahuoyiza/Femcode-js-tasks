// task : working with variables

let admin;
let name;
name =  "John" ;
admin = name;

alert(admin);

// task: right variable naming
 let planet = "earth";

 let currentUser = "John";

 // uppercase const?
 const birthday = '18.04.1982';

const age = someCode(birthday);
// should birthday or age be uppercase?
//answer: birthday , yes it is hardcoded. age, no it has to be recalculated if birthday changes

//DATA TYPES

// What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // ? answer: hello 1

alert( `hello ${"name"}` ); // ? answer: hello name

alert( `hello ${name}` ); // ? answer: hello Ilya
