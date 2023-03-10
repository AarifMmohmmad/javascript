### array question

```
// 1
const arr1 = [1,2,3]
console.log(arr1[1]);
// 2
const arr2 = [1,2,3,4,5]
console.log(arr2.length)
//3
const arr3 = [1,2,3,4]
for (let index = 0; index < arr3.length; index++) {
console.log(arr3[index])
}
//4
//5
const arr5 = [1,2,3]
arr5.push(4)
console.log(arr5)
//6
const arr6 = [1,2,3,4]
arr6.splice(1,1)
console.log(arr6);
//7
const arr7 = [1,2,3,4,5]
arr7.splice(arr7.length-1)
console.log(arr7);
//8
const arr8 = [1,2,3]
var check = arr8.includes(11)
console.log(check);
//9,10
//11
const arr111 =[1,2,3,4,5]
const arr112 =[6,7,8,9,10]
console.log(arr111.concat(arr112));
//12
const arr12 =[1,2,3,4,5]
console.log(arr12.join(","))
//13
const arr13 =[1,2,3,4]
console.log(arr13.reverse());
//14
const arr14 =[1,2,3,4,5]
checkindex = 1
for(let i = 0;i<arr14.length;i++){

if(checkindex ===arr14[i]){
console.log(i);
}
}
//15
//16
//17
const arr17 =[1,2,3,4]
var i = 0
let count = 0
while (i<arr17.length) {
count+=arr17[i]
i++
}
console.log(count);
//18
//19
//20
```
