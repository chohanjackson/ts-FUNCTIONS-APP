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
console.log(2+2);

myIntroduction(); // Invoice the function or calling the function
myIntroduction();
myIntroduction();

console.log("-------------------------------");

// function with parameters
function myIntroductionWithParameters(name:string, country:string,job:string): void {  // Required parameters

    console.log("Hi my name is",name); // Argument pass log
    console.log('I am from ${country}');// template string
    console.log("I am a " + job); // concatenation
    console.log("----------------------------------");
    
}

myIntroductionWithParameters('Alishba','Pakistan','web Developer'); // Invoice function with argument
myIntroductionWithParameters('Vikram','India','software Engineer');
myIntroductionWithParameters('Jackson','Pakistan','software Developer');


// Function with Default parameters
function myIntroductionWithDefaultParameters(name: string, country: string = 'Pakistan', job: string = 'software Engineer'): void {

     console.log("Hi my name is", name); // Argument pass log
     console.log("I am from ${country}"); // template string
     console.log("I am a" + job); // concatenation
     console.log("------------------------------");
     
}

myIntroductionWithDefaultParameters('Alinah'); // Invoke function with default argument
myIntroductionWithDefaultParameters('John cena', 'USA', 'Actor & Fighter'); // Invoke function with override default argument


// function with optional parameters
function myIntroductionWithOptionParameters(name: string,country:string,job?: string): void {

   console.log("Hi my name is", name); // Argument pass log
   console.log('I am from ${country'); // template string
   
   if (job) {
    console.log("I am a " + job); // concatenation
   }

   console.log("-------------------------");
   
}


myIntroductionWithOptionParameters('chohan','Pakistan'); // Invoke function with optional argument


// function with return type
function cupsToGrams(cups: number): number {
      return cups * 250;
}

const result: number = cupsToGrams(5);
console.log(result + " grams");
console.log(cupsToGrams(10));

console.log("-----------------------------");
 
// function Expression
const myJob = function (): void {

    console.log("I am a software Engineer");
    console.log("------------------------");
    
}

myJob(); // Ivoking the function or calling the function


// function Declaration with hosting
function myJob2(): void {
    console.log("I am a senior software Engineer");
    console.log("-------------------------------");
}

myJob2();

// self Invoking function
(
    function ():void {
          console.log("This is self Invoking function");
          console.log("------------------------------");

    }
)();


// Arrow function 

// short way of arrow function for single line
const multiply = (num1:number, num2:number) => { return num1 * num2; };

// Long way of arrow function but preferred
const addition = (num1:number, num2:number) => { return num1 + num2}


const result2 = multiply(5,10); // Invoke and store output in variable
const result3 = addition(5,10);

console.log(result2);
console.log(result3);

console.log("----------------------------");

console.log(1,2,3,4,5,6,6,7,4,7,78,78,7);

// function with rest parameters
const sum11Numbers = (message:string,message2:string,...myNumbers: number[]): number | void => {

console.log('message is: ' + message);
console.log('message2 is: ' + message2);
    
    let total = 0;

    for(const num of myNumbers){
        total += num; // total + num
    }

    return total;
}

const result4: number | void = sum11Numbers('rest parameter is awesome' , 'second message',1,2,3,4,5,6,6,7,4,7,78,78,7);

console.log('Sum of all number is:' + result4);
