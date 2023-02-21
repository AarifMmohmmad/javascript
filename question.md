# String Array Exercise

1. Count number of words in a Text after splitting it by any word.

```
let text = "aarif mohammad deshwali"
 arr = text.split(" ")
 console.log("test in words",arr);
```

2. Convert odd position word to lowercase and even position word to uppercase

```
   for example:
   Hello WeCode Academy
   hello WECODE academy
```

3. Capitalize each word of the string

```
   for example:
   hello wecode academy jhotwara jaipur
   Hello Wecode Academy Jhotwara Jaipur
```

4. Convert an string into 2 halfs and change the position of the other half

```
let str  = "aarif khan"
arr = str.slice(str.length/2)
console.log(arr);
arr2 = str.slice(0,str.length/2)
console.log(arr+" "+arr2);
```

5. Take a string and now ask for a character from the user. Now find total count of that character in the string

```
let str5 = "khano me kha "
let que = prompt("what are search a character")
let len = (str5.length)
sli = str5.split("")
let count = 0
for(let i = 0;i<=len;i++){
    if(sli[i]===que){
 count = count + 1
    }

}
console.log(count);
```

6. Reverse a string

```
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
```

7. Check string is palindrom or not

8. Remove space from the string and show the output

```
let str5 = "My code is wecode and wecode Jhotwara, Jaipur."
let len = (str5.length)
sli = str5.split(" ")
let count = ""
for(let i = 0;i<=len;i++){
    if(sli[i]){
     count = count +sli[i]
    }

}
console.log(count);
```

9. Check a word count in the string

```
 let str5 = "My code is wecode and wecode Jhotwara, Jaipur."
let len = (str5.length)
sli = str5.split(" ")
console.log(sli);
let count = 0
for(let i = 0;i<=len;i++){
    if(sli[i]==="code"){
 count = count + 1
    }

}
console.log(count);
```

10. Replace a word in string

```
let str2 = "My code is wecode and wecode Jhotwara, Jaipur."
console.log(str2.replace(/code/g,"rodd"))

```

11. Find max number from array

```

```

12. find min number from array
13. Find total duplicate count of a number
14. find middle element of the array
15. find last element of the array
16. find first element of the array
17. find if a number is present more than 3 times in the array or not ?
18. Find total count of odd numbers in array
19. Find total count of even numbers in array
20. Find second highest number from array
21. find second lowest number from array

22. Find average of the array

23. Find which number is repeated most number of the times in the array, also tell number along with count
