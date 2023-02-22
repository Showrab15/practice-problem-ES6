/*১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
****************************Variable Declaration in JavaScript****************************

In the early days of JavaScript, there was only one way to declare variables and that was using the var keyword. However, there were some issues associated with variables declared using the var keyword so it was necessary to evolve new ways for variable declaration. With the advent of ES6, now developers are able to define variables according to their specific needs, thanks to two new keywords: let and const.

All three of these three keywords have similarities in their syntax for declaring variables. However, they differ in their usage and scope, as detailed in the next section.

let us know Difference between var , let and const variable in javascript

1.VAR
The var keyword has traditional variable declaration syntax. We can redeclare of the value of this function. we can also  update it. if we want reassign it, it will reassign as new value . VAR can be globally scoped or function scoped. Scoped means where i can use variable name in code. When we use var outside the function , then it called global scope . That means the declared variable can be use in the whole code.
and when we declare var variable inside the function . it will only worked in inside the function . that's why it called function scoped or block scoped.

*/
var name = 'showrab'  //this var will work in the whole code and  i can redeclare the value of that variable name
name = 'paul'            
var name = 'supto'   // if i want to reassign/update it it will be reassign/update newly.  
console.log(name)

function varFunction (){
    var hello = 'hello'      //this var will work only in this function 
console.log(hello)
}

//  console.log(hello)         // output will syntax error . because we know that var variable only work inside the function
varFunction();

/*
// 2. LET 
LET IS A BLOCK SCOPED VARIABLE . IT WILL WORKED IN THE ONLY in  A BLOcK SCOPed{}.Also, variables declared with the let keyword cannot be updated or re-declared. Here is an example of how to use let to declare variables in JavaScript:

*/


let nameLet = 'showrab'  //this var will work in the whole code and but i can;t redeclare the value of that variable name
nameLet = 'paul'            //this let will not work bcz we know that let variable can not redeclare or reassign
let nameLet = 'supto'   //this let will not work bcz we know that let variable can not redeclare or reassign. because it has been already dclare
console.log(nameLet)

function func() {
    let x = 10; 
 
    if(x === 10) 
    {
        let y = 20; 
 
        console.log(x); //Output 10
        console.log(y); //Output 20
    }
     
    console.log(x); // Output 10
    console.log(y); // ’undefined'. because we know that let is a block scoped variable . it will only work in the inside the scoped
}

func() ;


/*
3.CONST
The const keyword follows the same rules as the let keyword. The only difference with const is that const is used to define only constant values in JavaScript programs.

Some important pointers for const include:
const declares a variable with a constant value.
Use the const keyword if the variable that you are declaring should not be allowed to be reassigned in the future.
*/ 


const number  = 45; 
 const number = 55;   //it will be error . because const variable name can not be reassign. 
 number = 77;        //    Assignment to constant variable.bcz we can not update const variable
console.log(number)