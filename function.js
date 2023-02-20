// function sum(a, b) {
//     a();
//     return function (a, b, c) {
//       console.log(a + b + c);
//     };
//   }
//   let ans = sum(function () {
//     console.log("Hello");
//   }, 50);
//   console.log(ans);
//   ans(10, 20, 30);


////////////////////////////////////////////////////////////////////////////////////////////
//   1. function(fn1, fn2, a, b) {
//     fn1();
//     fn2(a,b);
//     return function(){
//         console.log("Hello");
//     }
// }

//   question 1
// function frist(fn1,fn2,a,b){
//     fn1()
//     fn2(a,b)
//     return function(){
//         console.log("hello");
//     }
    
// }
// let ans = frist( function (){
//     console.log("hii");
// } , function (a,b){
//     console.log(a+b);
// },
// 10,
// 20,
// )
// console.log(ans);    



// question 2
//  function(fn1, fn2, a, b, c) {
//     fn1(a, b, c);
//     fn2(a,b);
//     return function(x, y, z){
//         console.log(x+y+z);
//     }
// }

// function sqr(fn1,fn2,a,b,c){
// fn1(a,b,c)
// fn2(a,b)
// return function (x,y,z){
//     console.log(x+y+z);
// }
// }
// let ans = sqr(function (a,b,c){
//     console.log(a+b+c)
// },
// function  (a,b){
//     console.log(a+b);
// },
// 10,
// 20,
// 30)

// console.log(ans);



// question 3

// 3. function(fn1, fn2, a, b) {
//     fn1(a, b, fn2);
//     return function(x, y, z){
//         console.log(x*y*z);
//     }
// }



// question 5



// 5. function(fn1, fn2, fn3, fn4) {
//     fn1(a, fn3, fn2);
//     fn2(fn3, fn4);
//     fn3();
//     fn4();
//     return fn4();
// }


// function test(fn1,fn2,fn3,fn4){
// fn1(a,fn3,fn2)
// fn2(fn3,fn4)
// fn3()
// fn4()
// return fn4()
// }

// let ans = test(function(a,fn3,fn4){
//     function()
// })



// let que = prompt("what do you print")

// let how =Number( prompt("how many time s do you want to print it?"))
// // 20

// let what =Number( prompt("what is frewquency"))
// // // 2


// let interval = setInterval( function () {
//     console.log(que,"<br>");
//   },what*1000);



// setTimeout(function () {
//     clearInterval(interval);
//   },how*what*1000);


// function sum(fn1, fn2, fn3, fn4) {
//     fn1(fn3, fn2);
//     fn2(fn3, fn4);
//     fn3();
//     fn4();
//     return fn4();
//   }
//   let ask = sum(
//     function (fn2, fn3) {
//       fn2();
//       fn3();
//     },
//     function (fn3, fn4) {
//       console.log("hello");
//     },
//     function () {
//       console.log("wecode");
//     },
//     function () {
//       console.log("khan");
//     }
//   );
//   console.log(ask);


// function test(fn1, fn2, fn3, a) {
//   fn1(a, fn3, fn2);

//   return function (x, y, z) {
//     return x + y + z;
//   };
// }

// let ans = test(
//   function (a, fn3, fn2) {
//     fn3(a);
//     fn2(a);
//   },
//   function (a) {
//     console.log(a * 5);
//   },
//   function (a) {
//     console.log(a * 10);
//   },
//   10
// );
// console.log(ans(10, 20, 30));

// hello
// 30
// 2000
//  undefined


//  function test(fn1, fn2, a, b) {
//   fn1(a, b, fn2);
//   return function(x, y, z){
//       console.log(x*y*z);
//   }
// }
//  let ans =  test(function(a,b,fn2){
//       fn2()
//       console.log(a+b);
// },
// function(){
// console.log("hello");
// },
// 10,
// 20
// )
// ans(10,10,20)


// let mno = "arif mohamad"
// let bcv = mno.split(" ")
// console.log(bcv);
// for(let value of bcv){
//   if(value %2 === 0 ){
//   let m = bcv.toLowerCase()
// }else{
//   let l = bvc.toUpperCase()
// }
// console.log(m+l);
// }


// let arr = "My name is Arun Kumar".split(" ");
// console.log(arr);
// let str = "";
// let index = 0;
// for (let val of arr) {
//   if (index % 2 === 0) {
//     str = str + " " + val.toLowerCase();
//   } else {
//     str = str + " " + val.toUpperCase();
//   }
//   index++;
// }
// console.log(str);


// let email = "aarifmohammad@gmail.com"
// let len = email.length
// let char = email.indexOf("@")
// let sli = email.slice(char)
// let ans=    sli.padStart(len,"*")
// console.log(ans);
