1.  Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let fruits = ["apple", "banana", "orange"]
console.log(fruits.includes("orange"));
```

2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
     let sumall = [1,2,3,4,5,6,7,8,9,10,11]
     let sum = 0
     for (let num of sumall) {
        num % 2 === 0 ? sum += num : console.log(num, "value is old")
     }
     console.log(sum);

```

4. Given an array of strings, write a function that returns the longest string in the array.

```
     let strarr = ["aaa","aaaaaa","sssasdfghjklss","sss","gyudjfbues"]
     let len = 0 ,max=0
     let longstr
     for(let i = 0;i<strarr.length;i++){
        len =  strarr[i].length
        if(len>max){
            max = len
         longstr = strarr[i]
        }
     }
     console.log(longstr)
```

5. Write a function that takes an array of numbers and returns the largest number in the array.

```
let array = [1,2,34,5,6,7,89,0]
max = array[0]
for(let i = 0 ;i<array.length;i++){
    if(array[i]>max){
        max = array[i]
    }
}
console.log(max);
```

6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
let evenarray = [1,2,34,5,6,7,89,0]
let ans = evenarray.filter(test => test % 2 === 0);
console.log(ans)
```

7.  Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```
let strarr2 = ["aaa","aaaaaa","sssasdfghjklss","aarif","gyudjfbues"]
 let newarraystr = []
    for(let i = 0;i<strarr2.length;i++){
       len =  strarr2[i].length
       if(len>=5){

           newarraystr.push(strarr2[i])
       }
    }
    console.log(newarraystr)
```

9.  Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
let squerarray = [1,2,34,5,6,7,89,0]
ans = squerarray.map(test)
function test(num){
   return num**2
}
console.log(ans);
```

11. Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```
let gerter = [1,2,34,5,6,7,89,0]
ans = gerter.filter(test)
function test(num){
   return num > 5
}
console.log(ans);
```

12. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```
let pulsh = [1,2,34,5,6,7,89,0]
ans = pulsh.map(test)
function test(num){
    return num +1
}
console.log(ans);
```

14. Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

```
let str = ["1","2","34","5","6","7","89","0"]
newarr = []
for(let i = 0;i<str.length;i++){
 newarr.push(str[i].length)
}
ans = newarr.reduce(test)
function test(num1,num2){
   return num1+num2
}
console.log(ans);
```
