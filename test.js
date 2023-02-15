// Question 1 (Marks:20)

// Create Bill Calculator

// Ask below Questions

// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?
// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

// let french = Number(prompt("How many french fries (60rs per piece) do you want to order ?"))
// let burgers = Number(prompt("How many burgers (50rs per piece) do you want to order ?"))
// let chowmin = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"))
// let Manchurian = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"))
// let Cokes = Number(prompt("How many Cokes (50 per piece) do you want to order ?"))

// console.log(60*french + 50 *burgers + 100 * chowmin + 80 *Manchurian + 50 * Cokes);



// Question 2 (Marks:10)
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

//2
for (let i = 7; i >= 1; i--) {
    let a = "";
    for (let j = 1; j <= i; j++) {
      if (j % 3 === 1  ) {
        a += "$";
      } else {
        a += "#";
      }
    }
    console.log(a);
  }


// Question 3 (Marks:5)
// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5

// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.


// for(let m = )




// Question 4 (Marks:15)
// Using a switch case to do this exercise

// If number is odd then print Odd
// If number is even then print Even
// If number is 100 then print 100
// Else print 10000


// let num = 1
// switch (num%2==0) {
//      case true :
//         console.log("odd");
//         break;
//     case false:
//         console.log("even");
//         break;
//     case 100 :
//          console.log("100");
//         break;

//     default :
//     console.log("10000");
//         break;
// }



// Question 5 (Marks:5)
// Ask user his/her birth year, "What is your birth year?"

// If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."

// If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box

// let birthyear = Number(prompt( "What is your birth year?"))
// let calcu = 2023 - birthyear
// if(calcu >= 18){
//    let licensenum = confirm("Do you have valid license number?")
// if(licensenum){
//     let validnum = Number(prompt("what is your licence number?"))
      
// if(validnum){
//     alert("This user licence num  " + validnum  + "  ready to Drive")
// }
// }
   

// }


// Question 6 (Marks:10)
// Take any number and take other number as 19. Now check their difference by subtracting each other. If both numbers difference is greater than 19 then print triple their absolute difference else print double their absolute difference.


// let anynum = 1190
// let othernum = 19
// let differencess = (anynum - othernum )
// if(differencess> othernum ){
//     console.log(othernum * 3);
// }else if ( differencess < othernum && differencess >1){
//     console.log(othernum * 2);
// }else{
//     console.log("both number are same");
// }


// Question 7 (Marks:5)
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// If yes then print sum of both the numbers Else print multiplication of both numbers

// let numb1 = 4
// let numb2 = -4
// if((numb1 > 1 && numb2< 1) || (numb2 > 1 && numb1 <1 )){
//     console.log(numb1 + numb2);
// }else{
//     console.log(numb1 * numb2);
// }


// Question 8 (Marks:10)
// Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No.

// let a = 2
// let b = 2
// let c = 3
// let d = 4

// if(((a==b || a==c || a== d) &&( b== a || b== c  || b==d) ) || ((c==a || c==b || c== d ) && (d==a || d==b || d==c)  )){
//     console.log("yes");
// }else{
//     console.log(a,b,c,d);
// }

// Question 9 (Marks:15)
// Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. If number is palindrome then print yes else print no

// let palindromes = 123

// for (var i = palindromes.length - 1; i >= 0; i--){
//      reversedString = reversedString + str[i];
//      console.log(i);
//      }



// Question 10 (Marks:5)
// Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No
// let takestring = "aaaaayyyyyyyya"
// let lengthss = takestring.length
// if(lengthss >=10){
//     for(n= 1;n <= lengthss;n++){
//         console.log(n);
//     }
// }else{
//     console.log("no");
// }
