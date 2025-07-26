// let color = "white";

// //Traffic light system
// if (color === "red") {
//     console.log("Stop! light color is red");
// }else if (color === "yellow") {
//     console.log("Slow down light color is yellow");
// }else if (color === "green") {
//     console.log("Go light color is green");
// }else {
//     console.log("Traffic light is broken");
// }

// let marks = 75;

// if (marks >= 80) {
//     console.log("A+");
// }else if (marks >= 60) {
//     console.log("A");
// }else if (marks >= 33) {
//     console.log("B");
// }else if (marks < 20) {
//     console.log("F");
// }

// let marks = 32;

// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade : O");
//     }else {
//         console.log ("Grade : A");
//     }
// }else {
//     console.log("better luck next time")
// }

//Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.

// let str = "apple"

// if((str[0] === 'a') && (str.length > 3)) {
//     console.log("good string");
// }else {
//     console.log("not a good string");
// }

// Assignment questions
// 1. 

// let num = 20;
//  if(num % 10 == 0)
//     {console.log("good");}
//  else{console.log("bad");
// }

// 2.

// let name = prompt("Please enter your name");
// let age = prompt("Please enter your age");

// alert(`${name} is ${age} years old.`);

// 3.

// let quarter = 0;

// switch(quarter) {
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,juneFebruary");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default: console.log("NOT A QUARTER!");
//         break;
// }

// 4.

// let str = "apples";

// if( (str[0] == 'a' || start[0] == 'A') && (str.length > 5) ) {
//     console.log("golden string");
// } else {
//     console.log("not a golden string");
// }
   
// 5.

// let a = 10;
// let b = 20;
// let c = 30;

// if(a > b) {
//     if(a > c) {
//         console.log("a is largest");
//     }else {
//         console.log("c is largest");
//     }
// } else {
//     if(b > c) {
//         console.log("b is largest");
//     }else {
//         console.log("c is largest");
//     }
// }

// 6.  In this case we have focus on that 33/10 then answer is decided the result of the number.

// let num1 = 33;
// let num2 = 47852;

// if( (num1%10) == (num2%10) ){
//     console.log("numbers have the same last digit which is",num1%10);
// }
// else {
//     console.log("numbers don't have the same last digit");
// }

// 7.

// let msg = "hello!";
//  console.log(msg.trim().toUpperCase());

//**** Practice questtion for push and pop method

// let months = ["January", "July", "March", "August"];

// months.shift(); // remove the first element
// months.shift(); // second element remove
// months.unshift("June");
// months.unshift("July");

//9.  concat method in arays for a remember purpose only when revise concatination means merge like when string = 'a' + 'b' = 'ab' similer.

// let primary = ["red", "blue", "green"];
// let secondary = ["orange", "purple", "green"];

// primary.concat (secondary); // combine two arrays 

// 10. practice qs

// let lang = ['c', 'c++', 'java', 'javascript', 'python', 'java', 'c#', 'sql'];

// 11. Javascript(21 part 3) assinment question 3.check the sring is blank or not.

// let str = " ";
// if (str.length == 0) {
//     console.log("string is empty");
// }else {
//     console.log("string is not empty");
// }

// 12. javascript(21 part 3) assinment question 4. check the alphabet is upper case or lower case.

// let str = "ApNaCoLlEgE";
// let idx = 3;

// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("character is lowercase");
// } else {
//     console.log("character is not lowercase");
// }
// means in simple term in when idx and idx match same them it's show lowercase otherwise not lowercase.

// 13. javascript(21 part 3) assinment question 5. Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = prompt("Please enter a string");

// console.log(`Original string = "${str}"`);
// console.log(`String without spaces = "${str.trim()}"`);

// "In this method trim() is cut the both side extra spaces so we find without spaces string."

// 14. javascript(21 part 3) assinment question 6. Write a JavaScript program to convert a string to title case.

// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 9;

// if (arr.indexOf(item) != -1) {
//     console.log("Element exists in array");
// } else {
//     console.log("Element doesn't exist in array");
// }
// so when we use indexOf method when we have to check presence of element in array so we sue this method.

//@for loop exmple forward and backword both.

// for (let i=1; i<=5; i++) {
//     console.log(i);
// }
// This reverse the order of numbers(10 to 1).

// for (let i=10; i>=1; i = i-3) {
//     console.log(i);
// }
// // This print all odd numbers(0 to 15).
// for (let i=1; i<=15; i+=2) {
//     console.log(i);
// }
// console.log("backword");
// for (let i=15; i>=1; i-=2) {
//     console.log(i);
// }
// console.log("even numbers");
// for (let i=2; i<=10; i+=2) {
//     console.log(i);
// }

// console.log("backword even numbers");
// for (let i=10; i>=2; i-=2) {
//     console.log(i);
// }

//print the multiplaction table for 5
// console.log("multiplaction table");
// for (let i=4; i<=40; i+=4) {
//     console.log(i);
// }
// promt write your number
// let n = prompt("Write your number");
// n = parseInt(n); // convert string to number by parseInt

// for (let i=n; i<=n*10; i+=n) {
//     console.log(i);
// }

// nested for loop expmle
// for (let i=1; i<=3; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }

//while loop example
// console.log ("forward loop");
// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

// console.log("backword loop");
// i = 5;
// while (i>=1) {
//     console.log(i);
//     i--;
// }   

// console.log("0 to 20");
// i = 1;
// while (i<=20) {
//     console.log(i);
//     i+=2;
// }

// Favrite movie example
// const favMovie = "avatar";

// let guess = prompt ("guess my favorite movie");

// while ( (guess != favMovie) && (guess != "quit")) {
//     guess= prompt ("wrong guess. please try again");
// }

// if (guess == favMovie) {
//     console.log("congrats!!");
// }else {
//     console.log("you quit");
// }

// while loop exmple
// let i = 1;
// while (i<=5) {
//     if (i == 3) {
//         break; // exit the loop when i is 3
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used brake at 3");

// while loop example now we create
// const favMovie = "avatar";

// let guess = prompt ("guess my favorite movie");

// while (guess != favMovie)  {
//     if (guess == "quit") {
//         console.log("you quit");
//         break; // exit the loop when user types "quit"
//     }
//     guess= prompt ("wrong guess. please try again");
// }

// if (guess == favMovie) {
//     console.log("congrats!!");
// }

// Array in loop example
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple"); // add element in array

// for (let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// Reverse the order of array elements
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple"); // add element in array

// for (i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }

// Nested arrays example
// let heroes = [["ironmman","spiderman", "thor"],
//              ["superman", "wonderwoman", "flash"]
// ]

// for(let i=0; i<heroes.length; i++) {
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }
// Second exmple 
// let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100] ];

// for(let i=0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// Todo list example
// let todo = [];
// let req = prompt("please enter your request");

// while (true) {
//     if (req == "quit"){
//         console.log("quiting app");
//         break;
//     }

//     if (req == "list"){
//         console.log("___________________")
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("___________________");
//     }else if(req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }else {
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }

// Write a JS program to delete all occurrences of element ‘num’ in a given array.
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for (let i=0; i<arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1); // remove the element at index i
//     }
// }
// console.log(arr); // Output: [1, 3, 4, 5, 6, 3]

//Write a JS program to find the number of digits in a number.
// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0) {
//     count++; // increment the count
//     copy = Math.floor(copy/10); // remove the last digit
// }
// console.log(count); // Output: 6

//  Write a JS program to find the sum of digits in a number.
// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//     let digit = copy % 10; 
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum); // Output: 25

// factorial example
// let n = 7;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}.`);// Output: 5040

// Find the largest number in an array with only positive numbers.
// let arr = [2, 5, 10, 4, 2, 7, 1, 9];
// let largest = 0;

// for (let i = 0; i <= arr.length; i++) {
//     if (largest < arr[i]) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

//Guessing Game
// const max = prompt("enter the max number"); //max number is between select which number between the guess happening.

// const random = Math.floor(Math.random() * max) + 1; // floor remove decimal number and math.random * max gives number 0 to max and +1 is give 1 to max.

// let guess = prompt("guess the number"); // guess number happen in 1 to max.

// while(true) { 
//     if(guess == "quite") {
//         console.log("user quit");
//     }// check if the user wants to quit

//     if(guess == random) {
//         console.log("tou are right! congrats!! random number was", random);
//         break;// exit the loop if the guess is correct
//     } else if(guess < random) {
//         guess = prompt("hint: your guess was too small. please try agian");// ask for a new guess if the guess is too small
//     } else {
//         guess = prompt("hint: your guess was too large. please try agian");// ask for a new guess if the guess is too large
//     }
// }

// Create a program that generates a random number representing a dice roll (from 1 to 6).
// let dice = Math.floor(Math.random() * 6) + 1; // first part till 6 include number is 0 to 5 and +1 is give 1 to 6.
// console.log(dice); // Output: random number between 1 and 6

// Create an object representing a car with the following properties: name, model, and color.
// const car = {
//     name: "Rangerover",
//     model: "2025",
//     color: "black",
// }
// console.log(car.name); // Output: Rangerover

// //Create an object Person with properties: name, age, and city. Change the value of city to "New York", and add a new property country with the value "United States".
// const Person = {
//     name: "shradha",
//     age: 23,
//     city: "delhi",
// }
// console.log(Person.city);
// console.log(Person.city = "New York");
// console.log(Person.country = "United States");

// Function in JS

// function isAdult() {
//     let age = 18;
//     if (age >= 18) {
//         console.log("adult");
//     }else {
//         console.log("not adult");
//     }
// }
// isAdult(); // Output: adult cause function is call if not then it's not show result.

// function create functions that print poem.
function printPoem() {
    console.log("Twinkle, twinkle, little star,");
    console.log("how I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("like a diamond in the sky.");
}
printPoem(); // Output: the poem is print

// Create a function to roll a dice & always display the value the dice (1 to 6).
function rollDice() {
    let rand = Math.floor(Math.random() * 6 ) + 1; 
    console.log(rand);
}
rollDice(); // Output: random number between 1 and 6
rollDice();
rollDice();
rollDice();
console.log("dice rolld example finish")

// Create a function that gives us the average of 3 numbers.
function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calcAvg (2, 4, 6); // Output: 4
console.log("average example finish")

// Create a function that prints the multiplication table of a number.
function printTable(n) {
    for (let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}
printTable(2);

// Return example
function isAdult(age) {
    if (age >= 18) {
        return "adult";
    }else {
        return "not adult";
    }
}
console.log("age example finish")

// Create a Function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
console.log("sum return example finish")

// //Create a function that retruns the concatenation of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result = "" ;
//     for (let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

//Higher order function
function multipleGreet(func, count) { //Hiegher order function this is loop function which the base of greet function how to print many times.
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {  // this is function which print hello and then connnect with multipleGreet function.
    console.log("hello"); 
}

multipleGreet(greet, 100); // Output: we can think that time we can print hello 100 times.

// Higher order function (return function)
// Returns a function that checks if a number is odd or even based on the request (Higher-Order Function).
function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }

        return even;
    } else {
        console.log("wrong request");
    }    
}

let request = "odd"; //even

// Methods and Method Shorthand
const calculator = {
    add (a, b) {
        return a + b;
    },
    sub (a, b) {
        return a - b;
    },
    mul (a, b) {
        return a * b;
    },
};

// Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) { // Basically getElements is function name and arr is array and num is number.
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr, num);

// // Write a JavaScript function to extract unique characters from a string.
// //Example: str = "abcdabcdefgggh" → Output should be: "abcdefgh"
// let str = "abcdabcdefgggh"; // function to get String with all unique elements

// function getUnique(str) {
//     let ans = "";
//     for (let i=0; i<str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             // if current character is not added, then add it in ans.
//             // Otherwise it is a duplicate.
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// getUnique(str);

// Write a JavaScript function that accepts a list of country names and returns the longest country name.
let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let curLen = country[i].length;
        if(curLen > ansLen) {
            // if current length is greater than the answer length, then update the answer.
            ansIdx = i;
        } 
    }
    return country[ansIdx];
}
longestName(country);

// "Write a JavaScript function to count the number of vowels in a string argument."
let str = "apnacollege";

function countVowels(str) {
  let count = 0;
  for(let i=0; i<str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}
countVowels(str);

// Write a JavaScript function to generate a random number within a range (start, end).(એવો function લખવો છે કે જે start અને end વચ્ચે કોઈ random number આપે.)
let start = 100;
let end = 200;

function generateRandom(start, end) {
  let diff = end - start; // diff give random values decimal to multify by diff gives integer.
  return Math.floor(Math.random() * diff) + start;
}

// Arrow function
const sum = (a,b) => a + b;

const cube = n => {
    return n * n * n;
};
// const cube = n => n * n * n; also use this implicit return function in arrow function

const pow = (a,b) => {
    return a ** b;
};

// Set timeout function 
console.log("hi there");

setTimeout( () => {
    console.log("Apna College");
}, 4000);

console.log("welcome to");

// SetInterval
let id = setInterval( () => {
    console.log("Apna College");
}, 2000);
setTimeout( () => {
    clearInterval(id);
    console.log("clear interval ran")
}, 4000)
console.log(id);

let id2 = setInterval( () => {
    console.log("Hello world");
}, 2000);

setTimeout( () => {
    clearInterval(id2);
    console.log("clear interval ran")
}, 4000)
console.log(id2);

// this with arrow function
const student = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    }
};
// Pratice Qs
// Write an arrow function that returns the square of number 'n'
const square = (n) => n*n;

// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (array) => { // આ function એ parameter તરીકે arr લે છે → એટલે કે એક array of numbers.ઉદાહરણ: [1, 2, 3, 4, 5, 6]
  let total = 0; // for this want to know than sear in this link "https://chatgpt.com/share/68302a22-95c8-800b-a5d4-b29cf0b8ceb5"
  for (let number of array) {
    total += number;
  }
  return total / array.length;
};

let array = [1, 2, 3, 4, 5, 6];
console.log("______________")
console.log(arrayAverage(array));

// "Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not."
let numF= 3;
const isEven = (numF) => numF % 2 == 0;
console.log("______________")
console.log(isEven(numF)); // Output: true

//  Assignment question check output
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message);
  }
};
setTimeout(object.logMessage, 1000);

// forEach methods function
let arr1 = [1,2,3,4,5];

arr1.forEach(function (el) {
    console.log(el);
});
// we can use arrow function use here also
arr1.forEach((el) => {
    console.log(el);
});
// One more example forEach 
let arr2 = [{// here we use students array for map example but run forEach then take arr2 variable
    name: "aman",
    marks: 95,
}, 
{   name: "shradha",
    marks: 94.4,
}, 
{
    name: "aman",
    marks: 92,
}]
arr2.forEach((student) => {
    console.log(student); // student.marks, student.names we can print here.
}); // marks converted in gpa by map method use

let gpa = arr2.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

// Map method
let num1 = [1,2,3,4];

let double = num1.map((el) => {
    return el * 2;
});
console.log(double);

// Filter mehods function
let nums = [1,2,3,4,7,8,2,9,10,12,11] ;
let ans = nums.filter((el) => {
    return el % 2 == 0; //even -> true, odd-> false
});
console.log("______________");
console.log(ans);
// here we can use this also "el % 2 != 0:" also el < 5 also which we want to filter in this function It happed by definition 

// Every function method
[2,4,6].every((el) => el%2 == 0);// this is not run cause every in callback not define means console.log is not define we can try this line direct on console
[3,1].every((el) => el%2 != 0);// we can try also so we can get the result of true or false
// Some function method 
[1,2,3,4].some((el) => (el % 2 == 0));// one value true then all true but in every one wrong all wrong.
[1,3].some((el) => (el % 2 == 0));

// Reduce method function
let nums1 = [1,2,3,4];
let finalVal = nums1.reduce((res, el) => {
    console.log(res);
    return res + el; // if we want to print result form of understanding how it's work so we need this.
});
console.log(finalVal);

// find max of the arr
let max = nums1.reduce((max,el) => {
    if (max<el) {
        return el;
    }else{
        return max;
    }
});
console.log("______________");
console.log(max);

// find the modulo 10 for number
let nums2 = [10, 20, 30, 40, 5]; // 5 if we write also one wrong then all is wrong cause every method used.

let ans2 = nums2.every((el) => el % 10 == 0);
console.log(ans2);

// Default parameter 
function sums(a, b = 3) {
return a + b;
}
// spread in Object literals
const data = {
    email: "ironmen@gmail.com",
    password: "abcd",
};
let datacopy = {...data, id:123, country:"india"};

let arr3 = [1,2,3,4,5];
let obj1 = {...arr3}; // obj -> key:val pair but here we can array to use object terms of spread array to object literals.
let obj2 = {..."hello"};

// Rest parameter
function sum3(...args) {
    //arguments
    for(i=0; i<args.length; i++){
    console.log("you gave us:", args [i]); // means this collect all arguments and store in one agruments.
    }
}
// Destrunction with rest both parameter
let nam = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = nam[0];
// let runnerup = nam[1];
// let secondRunnerup = nam[2];

let [winner, runnerup, secondRunnerup, ...others] = nam;

//Assignment qs 
let nums4 = [1,2,3,4,5];
const square1 = nums4.map((num) => num * num);
console.log(square1); 
let sum1 = square1.reduce((acc, cur) => acc + cur, 0); // now reduce thi sum count kari ne ek varible ma store kariye
let avg = sum1 / nums4.length; // now average count kariye by dividing kariye ave sum1 ne
console.log(avg); // Aa final answer aavi jase je pela square thayo then sum thayo and last ma avg thayo 11 aa output aavse.
console.log("______________");

// "Create a new array using the map function whose each element is equal to the original element plus 5."
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

//Create a new array whose elements are in uppercase of words present in the original array.
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));// aaya string te mate use karvama aave che ke te aaray mathi one by one array name aape. like"adam".

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];

doubleAndReturnArgs([1, 2, 3], 4, 4); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([1], 10, 4));     // [2, 20, 8]  // aa result console ma nahi dekhade ghano badho sam arr valo ek file ma che ne atle new console ma try karvu.

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));



