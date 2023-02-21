// Question 1 (Marks:20)

// let french = Number(prompt( "how many french (60rs per piece do you want to order ?"))
// let burgers = Number(prompt("hoe many bergers(50 per plate"))
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

// 2
// for (let i = 5; i >= 1; i--) {
//     document.write("<br>")
//     for(j=1;j<=i;j++){
//         if(j== 1 || j==3 || j== 5){
//     document.write("&")
//         }
//         document.write("#") 
//     }

//   }


//   question 2 
// for(let m=5;m>=1;m--){
//     let a = ""
// for (let j = 1; j <= m; j++) {
//     if (j % 3 === 1  ) {
//       a += "$";
//     } else {
//       a += "#";
//     }
 
//   }  
//   console.log(a)
// } 
  
// Question 3 (Marks:5)
// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5
// Create Bill Calculator

// Ask below Questions

// 2, 6,30 , 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.

// let manytime = Number(prompt("How many times do you want to print Series"))
// for(let i = 1; i<= 5;i++){
//     console.log((i**i)+i);
//  }





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
// let b = 3
// let c = 4
// let d = 4

// if(a==b || a==c || a== d || c==d || d== b||c==b){
//     console.log("yes");
// }else{
//     console.log(a,b,c,d);
// }

// Question 9 (Marks:15)
// Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. If number is palindrome then print yes else print no

// let palindromes = 123
//console.log(repeat(palindromes));
 
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

// let user = "huh"
// switch(user%2===0){
//     case true: 
//     console.log("Even")
//     break;
//     case false:
//         console.log("odd")
//         break;
//     case 100: 
//     console.log(100)
//     break;
//     default :
//     console.log(1000000)
// } 

// let ti = new Date()
// console.log(ti);

// let user = "3234"
// let i="";

// for (let j =user.length; j>0; j--)
// {
//       i=i+user.charAt(j-1);
// }
// if(i==user){
//     console.log("palindrome");
// }else{
//     console.log("non plaindrome");
// }

// 1. Count number of words in a Text after splitting it by any word.
// let text = "aarif mohammad deshwali"
//  arr = text.split(" ")
//  console.log("test in words",arr);

//3  Capitalize each word of the string
   let a = "rustam ali kahn peeh hasanpura bdiya bera "
   let m = a.split(" ")
//    console.log(m)
   for(let i = 0;i<=m.length;i++){
    if(i%2===0){
        
    }
   }

// 4. Convert an string into 2 halfs and change the position of the other half
// let str  = "aarif khan"
// arr = str.slice(str.length/2)
// console.log(arr);
// arr2 = str.slice(0,str.length/2)
// console.log(arr+" "+arr2);

//5. Take a string and now ask for a character from the user. Now find total count of that character in the string

let str5 = "My code is wecode and wecode Jhotwara, Jaipur."
let len = (str5.length)
sli = str5.split(" ")
let count = ""
for(let i = len;i>=0;i--){
    if(sli[i]){
     count = count +sli[i]
    }
    
}
console.log(count);
// mno = (sli)s
// console.log(mno.slice());



// 8. Remove space from the string and show the output
let str = "mno nakf  uhfbo bjhhfo"
let mno = str.split(" ")


// console.log(mno);


//10. Replace a word in string
let str2 = "My code is wecode and wecode Jhotwara, Jaipur."
// console.log(str2.replace(/code/g,"rodd"));ss


let aa = "wecode"
for(let value of aa){
   console.log(value);
}
