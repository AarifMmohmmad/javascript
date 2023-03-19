1.  Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```
          let str = "aaricodef"
         let check=  str.indexOf("code")===4
           if(check){
               console.log(str.slice(0,4) + str.slice(8))

           }else{
               console.log(str);
           }
```

2.Write a JavaScript program to capitalize the first letter of each word of a given string.

```
let str2 = "aarif mohammad from jaipur"
let strArray = str2.split(" ")
let converdstr = ""
for(let i = 0;i<strArray.length;i++){
    console.log(strArray[i]);
    converdstr += strArray[i].slice(0,1).toUpperCase() + strArray[i].slice(1) + " "

}
console.log(converdstr);
```

3.Write a JavaScript program to check whether all the digits in a given number are the same or not.

```
let samename=1112111111111
let con = samename.toString().split("")
for(let i = 0 ;i<con.length;i++){
for(let j = 0;j<con.length;j++){
if(con[i]!==con[j]){
console.log("false");

        }else{
            console.log("true");

        }
    }

}
```

4.Write a JavaScript function that reverse a number.

```
let num=111211111111123
let con = num.toString().split("")
reversnum = ""
for(let i = con.length-1;i>1;i--){
    reversnum +=con[i]
}
console.log(reversnum);
```

5.
6.
7. 8.Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

```
let array = [1,2,3,4,5,6,11,30,31,67,44,33,66,38,49]
ans = array.filter(filters)
function filters(num){
return num >30 && num <=50
}
console.log(ans);
function maps(num){
return num +20
}
ans2 = ans.map(maps)
function reduces(num1,num2){
return num1+num2
}
totel = ans2.reduce(reduces )
console.log(totel);
```

9.

10.

```
for(let i = 1;i<=5;i++){

    for(let j = i;j<6;j++){
       document.write(j+" ")
       }

    document.write (+"<br>")
}
```
