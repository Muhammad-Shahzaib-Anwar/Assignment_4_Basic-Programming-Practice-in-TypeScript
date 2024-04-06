"use strict";
/*Assignment
Basic Programming Practice in TypeScript

Submitted By: Muhammad Shahzaib Anwar
Roll No: PIAIC240606 */
//1. Hello Variable
//Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting; // Assign "Hello, World!" to this variable and print it.
greeting = "Hello, World!";
console.log(greeting);
//2. Basic Math
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1, num2; // Assign integer values and perform arithmetic operations.
num1 = 4;
num2 = 2;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log(`Sum is ${sum}`);
console.log(`Difference is ${difference}`);
console.log(`Product is ${product}`);
console.log(`Quotient is ${quotient}`);
//3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
let a = 1, b = 2; // Swap these values without using a new variable.
[a, b] = [b, a];
console.log(`Updated value of a is ${a} and updated value of b is ${b}`);
//4. Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message; // Now try assigning a number to it and see what happens.
//message=3;
//When I tried compiling the code by uncommenting the above line, I got this error
//index.ts:47:1 - error TS2322: Type 'number' is not assignable to type 'string'.
//5. Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.
let num3, num4; // Use the modulus operator (%) to find the remainder.
num3 = 5;
num4 = 2;
let modulus = num3 % num4;
console.log(modulus);
//6. Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0; // Increment this value by 1 in two different ways.
counter = counter + 1;
counter++;
console.log(counter);
//7. Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a_true = true, b_false = false, c_true = true; // Write expressions using these.
let andGateExpression = a_true && b_false && c_true; // all need to be true for result to be true in case of AND Gate
let orGateExpression = a_true || b_false || c_true; // Only one needs to be true for result to be true in case of OR Gate
let notGateExpression = !(a_true && b_false && c_true); //NOT Gate reverses the result of expression inside brackets.
console.log(andGateExpression);
console.log(orGateExpression);
console.log(notGateExpression);
//8. Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 1; //adding 1 to num result will be 11
console.log(`Using Coumpound Operator += ${num}`);
num -= 1; //subtracting 1 from num result will be again 10
console.log(`Using Coumpound Operator -= ${num}`);
num *= 2; // multiplying current value of num '10' with 2, result will be 20
console.log(`Using Coumpound Operator *= ${num}`);
//9. Even or Odd
//Instructions: Write a program to check if a number is even or odd.
let numEvenOrOdd; // Determine if this is even or odd.
numEvenOrOdd = 11;
let modulus_2 = numEvenOrOdd % 2;
if (modulus_2 == 0) {
    console.log(`Given Number ${numEvenOrOdd} is Even.`);
}
else {
    console.log(`Given Number ${numEvenOrOdd} is Odd.`);
}
//10. Voting Eligibility
//Instructions: Check if a person is eligible to vote.
let age; // Check if age is 18 or older to determine voting eligibility.
age = 21;
if (age >= 18) {
    console.log(`Person with Age ${age} is eligible for voting.`);
}
else {
    console.log(`Person with Age ${age} is not eligible for voting.`);
}
//11. Grading System
//Instructions: Assign a grade based on a numerical score.
let score; // Use conditionals to assign and print grades A, B, C, D, or F.
score = 91;
if (score >= 90) {
    console.log(`Your numbers are ${score} and you have acquired A Grade.`);
}
else if (score >= 75) {
    console.log(`Your numbers are ${score} and you have acquired B Grade.`);
}
else if (score >= 60) {
    console.log(`Your numbers are ${score} and you have acquired C Grade.`);
}
else if (score >= 33) {
    console.log(`Your numbers are ${score} and you have acquired D Grade.`);
}
else {
    console.log(`Your numbers are ${score} and you have acquired F Grade.`);
}
//12. Max of Three
//Instructions: Find the maximum of three numbers.
let x, y, z; // Determine the largest among these.
x = 5;
y = 10;
z = 15;
if (x > y && x > z) {
    console.log("x is greatest out of x,y and z");
}
else if (y > x && y > z) {
    console.log("y is greatest out of x,y and z");
}
else if (z > x && z > y) {
    console.log("z is greatest out of x,y and z");
}
//13. Leap Year Checker
//Instructions: Check if a given year is a leap year.
let year; // Determine if this is a leap year.
year = 2024;
let modulusForLeapYear = 2024 % 4;
if (modulusForLeapYear == 0) {
    console.log(`Given year ${year} is leap year as it is completely divisible by 4.`);
}
else {
    console.log(`Given year ${year} is not a leap year as it is not completely divisible by 4.`);
}
//14. Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit; // Convert this to Celsius and print the result.
fahrenheit = 98.6;
let celsius = (fahrenheit - 32) / 1.8;
console.log(`Temperature in farenheit is ${fahrenheit} and its Celcius conversion is ${celsius}`);
//15. Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.
let number; // Determine the sign of this number.
number = -7;
if (number > 0) {
    console.log(`Given number ${number} is greater than 0.`);
}
else if (number == 0) {
    console.log(`Given number ${number} is equal to 0.`);
}
else {
    console.log(`Given number ${number} is less than 0.`);
}
//16. Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.
let numberForMultiplication; // Print the multiplication table for this number up to 10.
numberForMultiplication = 10;
for (let i = 1; i < 11; i++) {
    let multiplicationResult = numberForMultiplication * i;
    console.log(`${numberForMultiplication} * ${i} = ${multiplicationResult}`);
}
