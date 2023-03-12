legth ---------------------
strning ki lenght pta krne ke liy
let a = "aarif khan"
a.length outpt--- 10

+++++++++++++++++++++++++++++

charAt --
in JavaScript, the charAt() function is used to retrieve the character at a specified index in a string.

it will be start in 0

++=++++++++++++++++++++++++++

slice -----
in JavaScript, the slice() function is used to extract a section of a string and return it as a new string. The slice() function takes two arguments: the starting index and the ending index (not including the ending index).

it will be count 0
it will take a negtive value

+++++++++++++++++++++++++++++++

substring-------

in JavaScript, the slice() function is used to extract a section of a string and return it as a new string. The slice() function takes two arguments: the starting index and the ending index (not including the ending index).

if the starting index is greater than the ending index, the function will swap them:

The main difference between substring() and slice() is that substring() does not accept negative indexes.

+++++++++++++++++++++++++++++++++
substr

You can also use negative values as starting index,

the main difference between substr(), slice() and substring() is that substr() takes the starting index and the number of characters to extract, while slice() and substring() take the starting and ending indexes.

++++++++++++++++++++++++++++++++++++

replace------------

In JavaScript, the replace() function is used to replace a specified value in a string with a new value. The replace() function takes two arguments: the value to be replaced and the new value.

the replace() function is a useful way to replace specified values in a string with new values in JavaScript.

--- /------koy bhi jiske jge replace add krna he /g

+++++++++++++++++++++++++++++++++++++++

repeat---------

the repeat() function is a useful way to repeat a string multiple times in JavaScript.

++++++++++++++++++++++++++++++++++++
toUpperCase
toLowerCase
concat

trim

padStart
padEnd
charAt

split

indexOf
valueOf
lastIndexOf
startsWith
endsWith
search
match
includes

---

1. push ->

```
modify array
New elements to add to the array ,
Appends new elements to the end of an array, and returns the new length of the array.

```

2. pop ->

```
modify array
Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.
```

3. unshif ->

```
modify array
New elements to add to the array ,
Inserts new elements at the start of an array, and returns the new length of the array.
```

4. shift

```
modify array
Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.
```

5. toString

```
array not modify nhi hota he

array array rhta he
Returns a string representation of an array.
```

6. join

```
yhe string ke liy bhi kam krta he

not modify array

Adds all the elements of an array into a string, separated by the specified separator string.
```

7. concat

```
yhe string ke liy bhi kam krta he

not modify array

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.
```

8. splice

```
modify the array

Removes elements from an array and,
 if necessary, inserts new elements in their place, returning the deleted elements.

aaray.splice("start",end/delet, add/element....,)
```

9. slice

```
not modifiy of array

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

array.slice(start,end)
```

10. reverse

```
modify array

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.
```

11. forEach

```
                 "smj kun aaya"

method calls a function for each element in an array.
method is not executed for empty elements.
```

12. at

```
string ke liy bhi kam krta he
 index leta  he element nikal kr deta
```

13. map

```
take result and given new array
creates a new array from calling a function for every array element.
 calls a function once for each element in an array.
 does not execute the function for empty elements.
 does not change the original array.

      ans = array.map(test)
     function test(num){

    if(num%2===0){
      console.log("mno");      <hm function ko koy bhi work krva skte he >
    }
    return num*2           <return krne pr yhe ak new array me dal ke value deta he>
    }
    console.log(ans);


 - "return" The results of a function for each array element.

```

14. filter

```
check condition

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

- method creates a new array filled with elements that pass a test provided by a function.
- method does not execute the function for empty elements. ,
- method does not change the original array.

- "return" Containing the elements that pass the test.
  If no elements pass the test it returns an empty array.

  ans2 = array.filter(test2)
  function test2(num){
  return 2<num // jo array element pass the conditon
  }
  console.log(ans2);
```

15. find

```
check element in frist element
 method returns the value of the first element that passes a test.
 method executes a function for each array element.
 method returns undefined if no elements are found.
 method does not execute the function for empty elements.
 method does not change the original array.

 - "return " The value of the first element that pass the test.
Otherwise it returns undefined.

  ans2 = array.find(test2)
    function test2(num){
      return num==1        // jo array frist element pass the conditon print that
  }
  console.log(ans2);


```

16. findIndex

```
check index
 method executes a function for each array element.
 method returns the index (position) of the first element that passes a test.
 method returns -1 if no match is found.
 method does not execute the function for empty array elements.
 method does not change the original array.


```

17. some

```
check condition
 method checks if any array elements pass a test (provided as a callback function).
 method executes the callback function once for each array element.
 method returns true (and stops) if the function returns true for one of the array elements.
 method returns false if the function returns false for all of the array elements.
 method does not execute the function for empty array elements.
method does not change the original array.

- "return"  true if any of the aray elements pass the test, otherwise false.
```

18. every

```
check condition
method executes a function for each array element.
method returns true if the function returns true for all elements.
method returns false if the function returns false for one element.
method does not execute the function for empty elements.
method does not change the original array

- "return " true if all elements pass the test, otherwise false.
```

19. flat

```
flat() method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth. The depth parameter specifies how deep the method flats the array structure. It defaults to 1.
```

20. flatmap

```
                       "not smj aaya"
The flatMap() method first maps all elements of an Array and then creates a new array by flattening the array.n

```

21. reduce

```

```
