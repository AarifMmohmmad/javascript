// let m = 10
// while (m>=1) {
//   console.log(m);
//   m--
// }
// let ans = Number(prompt("how many time you want to print hello word"))

// let m = ans
// do {
// console.log("hello world");
// m++

// } while (m<=5)

// for(let a=1;a<=100;a++){
//     if(a>=20 && a<=){
//       continue;
//     }else if (a>=85){
//       console.log(a);
//     }
//     console.log(a);
//   }

//   for (let i = 1; i <= 100; i++) {
//     if (i >= 20 && i <= 70) {
//       continue;
//     } else if (i > 85) {
//       break;
//     } else {
//       console.log(i);
//     }
//   }
// 1

// for(let i = 1;i<=10;i++){
//     document.write("<br>");
//    for(j=1;j<=i;j++){
//     if(j<=5){
//         continue
//     }
//     document.write("*");

//    }
// }

// let a = 1
// let b = 5
// // for(let a = 1;a<= 10;a++){
// //       document.write("<br>")
// //     if(a<=5){
// //     for(let b = 1; b<= a;b++){
// //      document.write("*");
// //     }
// //     continue
// //      }
// //       b-- ;
// //      for(let c = b ;c>=1;c--){
// //         document.write("*")

// //     }
// // }

// // function  table (num1){
//   //     for(let a = 1;a<=10;a++){
//   //       console.log(num1 + "*" +a  + "=" +);
//   //     }
//   // }
//   // table(2)
// // for(let m = 1;m<=10;m++){
// //   if(m==1){
// //     continue
// //   }
// //   if(m==2)
// //   {continue}
// //   if(m==4){
// //     break
// //   }
// //   console.log(m);
// // }

// // rigt pramod

// // let n = 5;
// // let string = "";
// // // External loop
// // for (let i = 1; i <= n; i++) {
// //   // printing spaces
// //   for (let j = 1; j <= n - i; j++) {
// //     string += " ";
// //   }
// //   // printing star
// //   for (let k = 0; k < 2 * i - 1; k++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);

// // for(let b = 1;b<=5;b++ ){

// //     for(let c = 1;c<=5;c++){
// //         console.log("*");
// //     }
// // }

// // function
// //  const sum = function  (a ,b ,c ,d){
// //   console.log(a + b + c + d);
// // }
// // sum(1,2,3,4)

// // function ev (a){
// //   if(a%2==0){
// //     console.log("even");
// //   }else{
// //     console.log("odd");
// //   }
// // }
// // ev(12)

// // const od = function (a){
// //   if(a%2==0){
// //     console.log("even");
// //   }else{
// //     console.log("odd");
// //   }

// // }
// // od(33)

//  let mno  =function (num1,num2){

//   if(num1%2==1 && num1 < 100){
//     return("yes");
//   }else if (num2%2===0 && num2>400 ){
//     return("no");
//   }else{
//     return ("hello")
//   }

// }
// let ans = mno(31,1002)
// console.log(mno(31,200000 ));
// -------------  &nbsp ---------

//        *
//       * *
//      * * *
//     * * * *
//    * * * * *
// let a = 5;
// for (let i = 1; i <= 5; i++) {
//   document.write("<br>");
//   for (let j = 5 - i; j >= 1; j--) {
//     document.write("&nbsp");
//   }
//   a--;
//   for (let k = 5 - a; k >= 1; k--) {
//     document.write("* ");
//   }
// }
// ---------------------------------------------------------------------------------
// for(let i = 1; i<=5; i++){
//   let space = "";
//   for(let k=1; k <= 5-i; k++){
//       space += " ";
//   }
//   document.write(space)
//   for(let j = 1; j <= i; j++){
//     space += "* "
//   }
//   console.log(space)
// }

// for(let s = 1;s<=10;s++){
//     let space = ""
//     for(let u = 1;u<=5-s;u++){
//       space =space + " "

//     }
//     document.write(space)
//     for(let j = 1; j <= s; j++){
//           space += "*"
//         }
//         console.log(space)
// }

// for(let a = 5;a>=1;a--){
//   let space = ""
// document.write("<br>")
//   for(let b = a;b>=1;b--){
//     document.write("*")

//   }
// }

// 1 function
// function odev (num1){
//   if(num1 %2==0){
//     console.log("even");
//   }else{
//     console.log("odd");
//   }
// }
// odev(33)

//2
// function  table (num1){
//     for(let a = 1;a<=10;a++){
//       console.log(num1 + "*" +a  + "=" +);
//     }
// }
// table(2)

// let name = prompt("what is your name")
// let age = prompt("what is your age")
// let address = prompt("what is your address")
// let mobile = prompt("what is your mobile number")
// // console.log("name" + name + "\n" + "age" +age +"\n" + "address" + address +"\n" + "mobile"  + mobile)
// console.log(`name: ${name}
// age:${age}
// address:${address}
// mobile:${mobile}`);

// let name = prompt("what is your name")
// let birthyear = Number(prompt("what is your birth year"))
// let sisbro = Number(prompt("do you have how many sister and brother "))
// let hindi = Number(prompt("Enter your marks of hindi subject in 10th class"))
// let math = Number(prompt("Enter your marks of math subject in 10th class"))
// let Science = Number(prompt("Enter your marks of science subject in 10th class"))
// let ageclu = 2023 - birthyear
// let totelmarks = hindi + math + Science

// console.log(`my name is ${name}. i was bron in ${birthyear} and my current age is ${2023-birthyear} years. I have ${sisbro} brothers and sister. My totel marks in 10th class were ${hindi+math+Science}`);

// console.log("my name is" + name + ". I was bron in "+birthyear + "and my current age is " + ageclu + "year . I have " + sisbro + "brothers and sister. My totel marks in 10th class were " +  totelmarks  );

// //
// function max(num, num2, num3) {
//   let max = num;
//   if (num2 > max) {
//     max = num2;
//   }
//   if (num3 > max) {
//     max = num3;
//   }
//   console.log(max);
// }
// max(490, 130, 770);

// const nummax = function (num1, num2, num3) {
//   let max = num1;
//   if (num2 > max) {
//     max = num2;
//   }
//   if (num3 > max) {
//     max = num3;
//   }
//   console.log(max);
// }
// nummax(400, 1330, 7170);

// const nummax2 =  (num1, num2, num3)=> {
//   let max = num1;
//   if (num2 > max) {
//     max = num2;
//   }
//   if (num3 > max) {
//     max = num3;
//   }
//   console.log(max);
// }
// nummax2(400, 1130, 870);


// let aa = "wecodbbfAe accedmy"
// let ans = aa.toLowerCase()
// console.log(ans);
// console.log( aa.toLowerCase());

//  1
// let mno = " wrygw  "
// let m = mno.length
// let x = mno.trim(" ")
// let y = x.length
// console.log(y);
//  let z =mno.trimStart()
// console.log(z.length);
// let w = mno.trimEnd()
// console.log(w.length);
// 2
// let antst = "abcd"
// let up = "ABCD"

// let change = antst.toUpperCase()
// console.log(change == up);
// //3
// console.log("aarif".concat("mohammad , aaaaa,bcd"));
// let as = "aajkjk s ijk  kmksj ik m "
// console.log(as.length);

// for(let a = 5;a>=1;a--){
//  console.log(("$".repeat(a)).concat("#".repeat(a)));
// }


// let mno = "my name is aarif mohammad"
// console.log(mno.indexOf("aarif"));
// console.log(mno.slice(11));


// let a  = "uwfu sjsguygs jdbhg"
// let s = prompt("what are search")
// let sea = a.includes(s)

// if(sea){
//     console.log("yes");
//     console.log(a.indexOf(s));
//     console.log(a.lastIndexOf(s));
// }else{
//     console.log("no");
// }



// let str = "hello my name is wecode academy";
// console.log();


// let str = "My name is  learn javascript"
// let a = str.split(" ")
// console.log(a);
// console.log(a.length);

// for(let i = 1;i<=5;i++){
//     let m = "5"
//     console.log(m.repeat())

// }


// let str = "aarif mohammad".split("a")
// console.log(str);
// for(let value of str){
//     console.log(value);
// }


// let a = "my name is aarif" ------------------------------------------------------------------------------
// let n = a.split(" ")
// index = ""
// aa = 0
// for(let value of n){
//   if(aa%2==0){
//     index = index + " " + value.toLowerCase
//   }else{
//     index = index + " " + value.toUpperCase
//   }
//   aa++
// }
// console.log(index);


// let a = "aaaaaaaaaaaa".concat("")
// let b = "sjjkjkjnjmjj"
// var m = a.toLowerCase()
// var n = b.toUpperCase()

// console.log(m.concat(n));


// let a = "jsjgsjgjsgjsgjsbuibyu"
// b = a.length
// if(b>10){
//     console.log("hello".concat(a));
// }else{
//     console.log(a.concat("world"));
// }


// let a = "fjsbjhhf"
// let b= "mno"
// c = a.length
// d = b.length
// if(c>d){
//     console.log(a+b);
// }else{
//     console.log(b+a);
// }

// let a = "abcdefghijklmno"
// let pq = "a"
// if(a.includes(pq)){
//     console.log(a.replace(pq,"aarif"));
// }else{
//     console.log("not mathch");
// }
