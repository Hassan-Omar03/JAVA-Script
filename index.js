//1. Write a js program to ﬁnd the maximum between two numbers.
function maximum(num1,num2) {
    if (num1>num2) {
        console.log(num1+ "is maximum then" +num2)
    }
    else if (num2>num1) {
        console.log(num2+ "is maximum then" +num1)
    }
    else{
        console.log("both numbers are equal")
    }
    
    var num1 = prompt ("Enter your first number")
    var num2 = prompt ("Enter your second number")
    var  maximum = maximum (num1,num2)
}


// 2. Write a js program to ﬁnd the maximum between three numbers. 
function maximum(number1,number2,number3) {
    if (number1>number2 && number1>number3) {
        console.log(number1 + "is greater then" +number2 +number3)
    }
    else if (number2>number1 && number2>number3) {
        console.log(number2 + "is greater then" +number1 +number3)
    }
    else{
        console.log("All numbers are equal")
    }
    var number1 = prompt ("Enter your first number")
    var number2 = prompt ("Enter your second number")
    var number3 = prompt ("Enter your third number")
    var  maximum = maximum (number1,number2,number3)

}

// 3. Write a js program to check whether a number is negative, positive or zero. 
function number(number) {
    if (n>0) {
        console.log("Number is postive")
    }
    else if (n<0) {
        console.log("Number is negative")
    }
    else{
        console.log("Numbers are equal")
    }
}


// 4. Write a js program to check whether a number is divisible by 5 and 11 or not. 

if (number%5===0 && number%11===0) {
    console.log("Number is divisible by 5 and 11")
}
else{
    console.log("Number is not divisibe by 5 and 11")
}

// 5. Write a js program to check whether a number is even or odd.
if (n%2===0) {
    console.log("Number is even")
    
}
else{
    console.log("Number is odd")
}

// 6. Write a js program to check whether a year is leap year or not. 
if (year% 4===0) {
    console.log("It is a leap year")
}
else{
    console.log("It is not a leap year")
}

// 7. Write a js program to input any alphabet and check whether it is vowel or consonant. 
function alpha(alphabet) {
    if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
        console.log("Its a vovel")
    }
    else{
        console.log("Its a constant")
    }
}

// 8. Write a js program to check whether a character is uppercase or lowercase alphabet
function checkcase(character) {
    if (character === character.toUpperCase()) {
        console.log("is upper case")
    }
    else{
        console.log("is lower case")
    }
    
}


// 9. Write a js program to input the week number and print weekday. 
function weeknumbers(weekdays) {
  if (weekdays===1) {
       console.log("Monday")
    } else if (weekdays===2) {
        console.log("Tuesday")
    } else if (weekdays===3) {
        console.log("Wednesday")
    } else if (weekdays===4) {
        console.log("Thursday")
    } else if (weekdays===5) {
        console.log("Friday")
    } else if (weekdays===6) {
        console.log("Saturday")
    } else if (Weekdasy===7) {
        console.log("Sunday")
    } else{
        "Invalid weekdays"
    }

    
}


// 10. Write a js program to input the month number and print the number of days in that month. 
function daysinmonts(monthnumber) {
    if (monthnumber===1) {
        console.log("January")
    } else if (monthnumber===2) {
        console.log("February")
    } else if (monthnumber===3) {
        console.log("March")
    } else if (monthnumber===4) {
        console.log("April")
    } else if (monthnumber===5) {
        console.log("May")
    } else if (monthnumber===6) {
        console.log("June")
    } else if (monthnumber===7) {
        console.log("July")
    } else if (monthnumber===8) {
        console.log("August")
    } else if (monthnumber===9) {
    console.log("September")
    } else if (monthnumber===10) {
        console.log("October")
    } else if (monthnumber===11) {
        console.log("November")
    } else if (monthnumber===12) {
        console.log("December")
    } else{
        "Invalid month numbers"
    }
}

// 11. Write a js program to count a minimum number of notes in a given amount. 





//    Question #12: Write a js program to input marks of five subjects Physics, Chemistry,
//    Biology, Mathematics, and Computer. Calculate percentage and grade
//    according to the following:
//    Percentage >= 90% : Grade A
//    Percentage >= 80% : Grade B
//    Percentage >= 70% : Grade C
//    Percentage >= 60% : Grade D
//    Percentage >= 40% : Grade E
//    Percentage < 40% : Grade F
function calculateGrade(physics, chemistry, biology, maths, computer) {
    Physics= Number(physics)
    Chemistry= Number(chemistry)
    Biology= Number(biology)
    Maths= Number(maths)
    Computer= Number(computer)
    var totalMarks = Physics + Chemistry + Biology + Maths + Computer;
    var percentage = (totalMarks / 500) * 100;
    if (percentage >= 90) {
        console.log("Grade = A");
    } else if (percentage >= 80 && percentage < 90) {
        console.log("Grade = B");
    } else if (percentage >= 70 && percentage < 80) {
        console.log("Grade = C");
    } else if (percentage >= 60 && percentage < 70) {
        console.log("Grade = D");
    } else if (percentage >= 40 && percentage < 60) {
        console.log("Grade = E");
    } else {
        console.log("Grade = F");
    }
}
var Physics = prompt("Enter marks of Physics");
var Chemistry = prompt("Enter marks of Chemistry");
var Biology = prompt("Enter marks of Biology");
var Maths = prompt("Enter marks of Maths");
var Computer = prompt("Enter marks of Computer");
calculateGrade(Physics, Chemistry, Biology, Maths, Computer);

// Question #13:Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
function calculateGrossSalary(basicSalary) {
    let grossSalary;
    let hra, da;

    if (basicSalary <= 10000) {
        hra = basicSalary * 0.2;
        da = basicSalary * 0.8;
    } else if (basicSalary <= 20000) {
        hra = basicSalary * 0.25;
        da = basicSalary * 0.9;
    } else {
        hra = basicSalary * 0.3;
        da = basicSalary * 0.95;
    }
    grossSalary = basicSalary + hra + da;
    return grossSalary;
}
const basicSalary = 15000
const grossSalary = calculateGrossSalary(basicSalary);
console.log("Gross Salary:", grossSalary);



