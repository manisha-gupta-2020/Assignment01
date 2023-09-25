// document.write("declaring variables")
// 1 declaring variables in camel case notation
// let someMonth;
// function theMonth() {}
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;


// 2 example of a numeric literal expression, a string literal 
//expression, a Boolean literal expression, and a null literal expression.

// 1.7                
// 'manisha gupta'   
// true             
// null                

//3  two examples of complex / variable expressions.
// let cExpr1 = 5 + 6 * (9 / 3);
// let cExpr2 = "good" + "day" ;

//4 Declare (but do not assign) 9 variables 
// Use Camel Casing and Hungarian Notation when naming your identifiers.
//In hungarian notation we specify data type usng str,int or bln as prefix
// let firstName, lastName, address, city, state, zipCode ;
// let intYourAge, strReferralSource, blnMayWeContactYou ;

//5
// firstName = "Manisha";
// lastName = prompt("Enter your last name:") ;
//  let blnMayWeContactYou = true;


 //6 Add a number and a string and display the coerced result in the browser’s console window.

//  let var2 = "Manisha" + 5;
//  console.log(var2);


//7   add a Boolean and a string and display the coerced result - string
//add a number and a Boolean and display the coerced result - number

// let classAttended = true;
// let cor1 = "It\'s "+ classAttended + " , I attended class today."
// let cor2 = 2 + classAttended;
// document.write(cor1);
// document.write(cor2);


//8
// no. fix by escaping the '  in I'm
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

//9

// result1 = null;
// averageScore;

//10  unary typeof operator on  string, number, Boolean, object, and undefined.

// console.log(typeof("name"));
// console.log(typeof(1000));
// let working = true;
// console.log(typeof(working));
// let student = {name:"mg" ,age: 30} ;
// console.log(typeof(student));
// console.log(typeof TRUE); // undefined

//11
// alert("Hello " + "Manisha Gupta" + ", welcome to the javascript class!");


//12
// let name = 'Manisha Gupta';
// alert(`Hello ${name}, Welcome to the javascript class!`);

//13
// let name = 'Manisha Gupta';
// let course = "JavaScript";
// alert(`Hello ${name}, Welcome to the ${course} class!`);

//14
// alert(`Hello ${name}. \n Welcome to the ${course} class!`);

//15
// let name = prompt("Enter your name:");
// alert(`Hello ${name}. \n Welcome to the Javascript class!`);

//16
// let name = prompt("Enter your name:");
// let course = prompt("Enter your course: ");
// alert(`Hello ${name}. \n Welcome to the ${course} class!`);

//17
// let x = 10, y = 20;
// console.log(x+y);


//18
// let x = 20;
// x += 20;
// console.log(x);

//19

// let x = 20;
// x *= 5;
// console.log(x);

//20
//  let x = 20%3;
//  console.log(x);

//21  Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
//application uses == and && operators to ask for input from user and decide if they are in my class.

// let x = prompt("Choose course number( COMP690, COMP691): ");
// x = x.toUpperCase();

// let course = prompt("Enter course name(Python, Javascript): ");
// course = course.toLowerCase();

// if (x == "COMP690" && course == "javascript"){
//     alert("Yay! Your are in my class.")
// } else {
//     alert("Boo! Your are not in my class.")
// }

/*22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application. */

// reversing the above logic to use != and || operators
// let x = prompt("Choose course number( COMP690, COMP691): ");
// x = x.toUpperCase();

// let course = prompt("Enter course name(Python, Javascript): ");
// course = course.toLowerCase();

// if (x != "COMP691" || course != "javascript"){
//     alert("Sad! Your are not in my class.")
// } 