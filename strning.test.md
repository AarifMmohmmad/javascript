1. Write a JavaScript function to capitalize the first character of the string.

```
            let str = "mohammad aarif"
            let  captlize = str.slice(0,1).toUpperCase()
            let str2 = str.slice(1)
            console.log(captlize.concat(str2));
```

2. Write a JavaScript function to insert a string within a string at a particular position

```
  let str = "We are learning exercises."
           let addstr = prompt("what do you want to add to the string")
           let position = Number(prompt("enter position in add strning"))
           let index1 = str.slice(0,14)
           let indxe2 = str.slice(position)

           console.log(index1 +" " +addstr +" "+indxe2);
```

3. Write a JavaScript function to count the occurrence of a substring in a string.

```

            let str = "My name is wecode academy and my friend name is Arun Kumar."
            let findNumber = "is"
            let index = str.split(" ")
            let count   = 0
            for(let i = 0;i<=str.length;i++){
              if(index[i]===findNumber){
                count += 1
              }

            }
            console.log(count);
```

4. Ask user below questions:
   What is your name? What is your mobile number? What is your account number? What is your atm card number? What is your aadhar number?

```
   let name1 = prompt(" What is your name?")
   let mobileNum = prompt("What is your mobile number?")
   let accountNum = prompt(" What is your account number?")
   let atmNum = prompt("What is your atm card number?")
   console.log(name1);
   let mobilechange = mobileNum.slice(0,7)
   let mastmobile = mobilechange.padEnd(10,"_")
   console.log(mastmobile); 12
   let accounchange1 = accountNum.slice(0,(accountNum.length)/2-3)
   let accounchange2 = accountNum.slice(accountNum.length/2)
   console.log(accounchange1 + accounchange2.padStart(accountNum.length,"_"));
   let atmchange = atmNum.slice(0,4)
   console.log(atmchange + atmNum.padEnd(15,"\*"));

```

5. Print below pattern using repeat function

```
let space  = "&nbsp"
   let star = "$"
   let count  = 1
for(let i = 7;i>=1;i-=2){
    count+=2
   document.write(space.repeat(i +1) +star.repeat(count),"<br>");

}
```

6. Ask below questions :

What is your name?
What is your birth year?
What is your address ?
What is your country code?
What is your mobile number?

```
let name1 =  prompt("What is your name?")
let birth = prompt("What is your birth year?")
 let address = Number( prompt(" What is your address ?"))
 let country =prompt( "What is your country code?")
let num = prompt(" What is your mobile number?")
let counGE  = 2023 - birth
console.log(`my name is  ${name1} .I was bron in ${birth} and my current age in ${counGE} My address is ${address} and my mobile number is ${num} `);

```

7. Now in right side part add Hello in the end In left side of the string add World in starting

```
let str = "Wecode Academy"
str1 = str.slice(str.length/2)
str2 = str.slice(0,str.length/2)
console.log(str2 + "hell0" + " World " + str1);
```

8. Guessing Game? Ask user what character is present at particular index in a word.

If user guess is right then show him Congrulations message otherwise show Sorry message.

for example: Wecode Academy

What is the character you are guessing? A What is the index? 3

```
let str = "Wecode Academy"
let num = 1
num--
let que = prompt(`what character is present at particular index ${num} in a word.`)
let char = str.charAt(num) // e
if(char===que){
    console.log("Congrulations");
}else{
    console.log("Sorry");
}
-------------------second
let str = "Wecode Academy"
let num  = 1
let que = prompt(`what character is present at particular index ${num} in a word.`)
let check = str.startsWith("W",num-1)
if(check){
    console.log("Congrulations");
}else{
    console.log("Sorry");
}

```

9. Print Pattern using repeat function

```
let star  = "*"
   let space  = "&nbsp"
   let count  = 0
for(let i = 5;i>=1;i--){
    count++
   document.write(space.repeat(count) +star.repeat(i) +space.repeat(count),"<br>");

}
```

10. Print below Series using repeat function

```
multiply = 0

for(let n = 1;n<=5;n++){
let str =  (`${n}`)
multiply++
    document.write(str.repeat(n)  +(n*multiply  ) +" ")
}

```

/// 1 2 3 5 8 13 21 34 55
fo
