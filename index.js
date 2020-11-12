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

//OPERATORS:
//What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;

let c = ++a; // ? answer: 2
let d = b++; // ? answer: 1

//What are results of these expressions? --type conversions

"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false // 1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5  //$45
"4" - 2  // 2
"4px" - 2 //Nan
7 / 0 //infinity
"  -9  " + 5 // -95
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // Nan
" \t \n" - 2 //Nan right-answer: -2 because space characters are translated to 0

// fix the addition
/*Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.
let a = prompt("First number?", 1);--
let b = prompt("Second number?", 2);

alert(a + b); // 12

*/
//solution :
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3


