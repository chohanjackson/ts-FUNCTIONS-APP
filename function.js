// basic Function syntax
// function functionName() { // function declaration
// function body
//}
// basic function syntax
function myIntroduction() {
    console.log('Hi my name is Jackson chohan');
    console.log("I am from Pakistan");
    console.log("I am a software Engineer");
}
myIntroduction();
console.log('what is 2+2?');
console.log(2 + 2);
myIntroduction(); // Invoice the function or calling the function
myIntroduction();
myIntroduction();
console.log("-------------------------------");
// function with parameters
function myIntroductionWithParameters(name, country, job) {
    console.log("Hi my name is", name); // Argument pass log
    console.log('I am from ${country}'); // template string
    console.log("I am a " + job); // concatenation
    console.log("----------------------------------");
}
myIntroductionWithParameters('Alishba', 'Pakistan', 'web Developer'); // Invoice function with argument
myIntroductionWithParameters('Vikram', 'India', 'software Engineer');
myIntroductionWithParameters('Jackson', 'Pakistan', 'software Developer');
// Function with Default parameters
function myIntroductionWithDefaultParameters(name, country, job) {
    if (country === void 0) { country = 'Pakistan'; }
    if (job === void 0) { job = 'software Engineer'; }
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ${country}"); // template string
    console.log("I am a" + job); // concatenation
    console.log("------------------------------");
}
myIntroductionWithDefaultParameters('Alinah'); // Invoke function with default argument
myIntroductionWithDefaultParameters('John cena', 'USA', 'Actor & Fighter'); // Invoke function with override default argument
// function with optional parameters
function myIntroductionWithOptionParameters(name, country, job) {
    console.log("Hi my name is", name); // Argument pass log
    console.log('I am from ${country'); // template string
    if (job) {
        console.log("I am a " + job); // concatenation
    }
    console.log("-------------------------");
}
myIntroductionWithOptionParameters('chohan', 'Pakistan'); // Invoke function with optional argument
// function with return type
function cupsToGrams(cups) {
    return cups * 250;
}
var result = cupsToGrams(5);
console.log(result + " grams");
console.log(cupsToGrams(10));
console.log("-----------------------------");
// function Expression
var myJob = function () {
    console.log("I am a software Engineer");
    console.log("------------------------");
};
myJob(); // Ivoking the function or calling the function
// function Declaration with hosting
function myJob2() {
    console.log("I am a senior software Engineer");
    console.log("-------------------------------");
}
myJob2();
// self Invoking function
(function () {
    console.log("This is self Invoking function");
    console.log("------------------------------");
})();
// Arrow function 
// short way of arrow function for single line
var multiply = function (num1, num2) { return num1 * num2; };
// Long way of arrow function but preferred
var addition = function (num1, num2) { return num1 + num2; };
var result2 = multiply(5, 10); // Invoke and store output in variable
var result3 = addition(5, 10);
console.log(result2);
console.log(result3);
console.log("----------------------------");
console.log(1, 2, 3, 4, 5, 6, 6, 7, 4, 7, 78, 78, 7);
// function with rest parameters
var sum11Numbers = function (message, message2) {
    var myNumbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        myNumbers[_i - 2] = arguments[_i];
    }
    console.log('message is: ' + message);
    console.log('message2 is: ' + message2);
    var total = 0;
    for (var _a = 0, myNumbers_1 = myNumbers; _a < myNumbers_1.length; _a++) {
        var num = myNumbers_1[_a];
        total += num; // total + num
    }
    return total;
};
var result4 = sum11Numbers('rest parameter is awesome', 'second message', 1, 2, 3, 4, 5, 6, 6, 7, 4, 7, 78, 78, 7);
console.log('Sum of all number is:' + result4);
