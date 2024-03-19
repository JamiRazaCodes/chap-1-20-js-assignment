//chapter_1_Alerts
// 1
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");
// 2
alert("You're learning javascript");
//3
alert("Chapter 1 task complete");

//chapter_2_Variables
//1
var firstName = "Jami";
//2
var lastName;
lastName = "Raza";
//3
var teamName = "Ignite sports";
alert(teamName);
//4
var bestMan = "Charlie";
bestMan = "Bobby";

//chapter_3_variableForNumber
//1
var caseQty;
//2
caseQty = 144;
//3
var num = 9;
//4
var sum;
sum = 2 + 2;
//5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

console.log(orderTotal);
//6
var x = 7;
x = x + 3;

//chapter_4_Variable_names_Legal _and_ Illegal
//1
var productCost = 3.45;
//2
var nameOfBand;
//3
var theNumber = 5;
//4
var jamiRaza;
//5
// Legal variable names:

// myVariable
// _underscoreVariable
// $dollarVariable
// camelCaseVariable
// num123
// some_variable

// Illegal variable names:

// 123num (starts with a digit)
// my-variable (contains a hyphen, not allowed)
// my variable (contains a space, not allowed)
// @variable (contains special characters other than underscore and dollar sign)
// 1stVariable (starts with a digit)
// var (reserved keyword in JavaScript)

//chapter_5_math_Expression_I
//1
//   name = modulus;
//   symbol = %;

//2
var num = 20 % 6;
// value = 3 output/remainder = 2
//3
var largeNum = 1000 * 2000;
//4
var firstVariable = 10;
var secondVariable = 5;

var result = firstVariable - secondVariable;
//5
var remainder = 15 % 4;
//6
var num1 = 10;
var num2 = 5;
var result = num1 * num2;

alert("Result of multiplication is: " + result);

//chapter_6_mathExpression II   
//1
x++;
//2
x--;
//3
var x = 50;
var y = x++;
//value of y = 50 because its post increament
//4
var y = 50;
var z = --y;
//value of z  = 49 because its pre decrement
//5
var newNum = --num;
//6
var secondVariable = ++firstVariable;
//7
var number = 10;
++number;
alert("The new value is: " + number);

//chapter_7_math_Expressions III
//1
var calculatedNum1 = 2 + (2 * 6);
calculatedNum = 14;
//2
var calculatedNum2 = (2 + 2) * 6;
calculatedNum2 = 24;
//3
var calculatedNum3 = (2 + 2) * (4 + 2);
calculatedNum3 = 24;
//4
var calculatedNum4 = ((2 + 2) * 4) + 2;
calculatedNum4 = 18;
//5
var cost = (2 + 2) * (4 + 10);
//6
var cost = (2 + (2 * 4) + 10);
//7
var pressure = 4 / (2 * 4);

//chapter_8
//1
var num = "2" + "2";
// result = 22
//2
var message = "Hello," + "Dolly";
alert(message);
//3
alert("33" + 3);
//result = 333
//4
alert("Pakistan" + " " + "Zindabad")
//5
var strnum = "Hello " + 5;
//6
var firstString = "Saylani"
var secondString = "Zindabad"
var fullString = firstString + " " + secondString;
alert(fullString);
//chapter 9
//1
prompt('Enter First Name')
//2
var country = prompt("Country?", "China");
//3
var yourName = prompt("Enter Your Name");
//4
var userInput = prompt("Please enter your favorite color:", "Blue");
//5
var firstMessage = "Please enter your name:";
var defaultResponse = "eg: Jami Raza";

var userName = prompt(firstMessage, defaultResponse);
//6
var message = "Rnter your favorite Dish:";
var defaultResponse = "Biryani";

var userResponse = prompt(message, defaultResponse);

alert("Your favorite Dish is: " + userResponse);

//chapter 10
//1
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}
//2
if (x === y) {
    var z = prompt("Enter your secret code");
}
//3
var ZipCode = "10010";

if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}
//4
var x = 1; 


if (x === 1) {
    x = 3; 
}

//chapter 11
//1
if (variable1 !== variable2) {

}
//2
if (variable1 >= variable2) {

}
//3
var x = 4;
if (x !== 2) {
    x = 1; 
}
//4
var num = 10;
if (num !== 5) {
    alert("Congratulations!");
}
//5
var firstName = prompt("Enter your first name:");
if (firstName !== "Jami") {
    alert("No match");
}

//chapter 12
//1
var variable1 = 20;
var variable2 = 16;

if (variable1 >= variable2) {
    alert("Matched");
} else {
    alert("Wrong");
}
//2
var marks = parseFloat(prompt("Enter your marks:"));
var percentage = (marks / 100) * 100;
var grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
}
 else {
    grade = "Fail";
}
alert("Your percentage is: " + percentage.toFixed(2) + "%. Grade: " + grade);
//3
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is 10");
}
//4
var city = prompt("Please enter a city:");

if (city === "Karachi") {
    alert("Acknowledging it is Karachi");
} else {
    if (city === "Lahore") {
        alert("Acknowledging it's Lahore");
    } else {
        alert("This is a different city");
    }
}

//chapter 13
//1
if (a === b && c === d){

}
//2
if (a === b || c !== d)  {

}
//3
if (nameo === "Hamza" || nameo === "Arsalan"){

}
if (age < 60){

}
//4
var firstNumber = 10;
var secondNumber = 20;

if (firstNumber < secondNumber || firstNumber > secondNumber) {
    alert("Right");
}
//5
var firstName = "Jami";
var lastName = "Raza";

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");

if (userFirstName === firstName && userLastName === lastName) {
    alert("Welcome, " + userFirstName + " " + userLastName + "!");
}
else {
    alert("Your entered name does not match our records.");
}

//chapter 14
//1
var password = prompt("Enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}

//2
var a = 1; 
var c = "Max"; 

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
//3
if (a === 1 && c === "Max") {
    alert("OK");
}
//4
var firstNumber = 10;
var secondNumber = 10;

if (firstNumber === secondNumber) {
    if (firstNumber <= secondNumber) {
        alert("Equal");
    }
}

//chapter 15
//1
var array = [];
//2
var myArray = ["Hello"];
//3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);
//4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
alert("Total length of array: " + lengthOfArray);
//5
var myArray = ["firstElement"];
myArray[1] = "secondElement";
alert(myArray[1]);

//chapter16
//1
var myArray = ["firstElement"];
myArray.push("secondElement");
alert(myArray[myArray.length - 1]);
//2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);
//3
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(10);

//chapter 16 part2
//1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);
//2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(3, 2, 1);
console.log(sizes); 
//3
var myArray = ["firstElement"];
myArray.unshift("secondElement");
alert(myArray[0]);
//4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var index = sizes.indexOf("XL");
sizes.splice(index, 0, "L");
console.log(sizes); 
//5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);
//6
var pets = ["dog", "cat", "ox", "duck", "frog"];
var dogIndex = pets.indexOf("dog");
pets.splice(dogIndex + 1, 0, "hamster", "parrot");
pets.splice(dogIndex + 1, 3);
console.log(pets); 
//7
var pets = ["dog", "cat", "ox", "duck", "frog"];
var catIndex = pets.indexOf("cat");
var oxIndex = pets.indexOf("ox");
pets.splice(catIndex, 2);
console.log(pets);
//8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets);

//chapter 17-20
//1
for (var i = 0; i < 10; i++) {

}
//2
for (var i = 0; i < 12; i++) {

}
//3
//The five missing characters excluding any spaces are: `; ; ; + =`
for (var i = 0; i <= 4; i++)
//4
for (var j = 0; j < 100; j++) {
    
}
//5

for (var i = 3; i > 0; i--) {
    
}
//6
var arrayLength = myArray.length;
//7
var flag = true;
//8
for (var i = 0; i < pets.length; i++) {

}
//9
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert("Counter value on the second iteration: " + i);
        break;
    }
}
//10
var userNames = ["Alice", "Bob", "Charlie", "David"];


var firstName = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {

    if (firstName === userNames[i]) {
        alert("User found!");
        break;
    }
    if (!userNameFound) {
        alert("Please write correct user name");
    }
}
//11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("No match found");
}
//12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}
