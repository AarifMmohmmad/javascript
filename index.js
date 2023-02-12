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
// for(let a = 1;a<= 10;a++){
//       document.write("<br>")
//     if(a<=5){
//     for(let b = 1; b<= a;b++){
//      document.write("*");
//     }
//     continue
//      }
//       b-- ;
//      for(let c = b ;c>=1;c--){
//         document.write("*")
     
//     } 
// }


// for(let m = 1;m<=10;m++){
//   if(m==1){
//     continue
//   }
//   if(m==2)
//   {continue}
//   if(m==4){
//     break
//   }
//   console.log(m);
// }



// rigt pramod
           
// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// for(let b = 1;b<=5;b++ ){
      
//     for(let c = 1;c<=5;c++){
//         console.log("*");
//     }
// }



// function
//  const sum = function  (a ,b ,c ,d){
//   console.log(a + b + c + d);
// }
// sum(1,2,3,4)


// function ev (a){
//   if(a%2==0){
//     console.log("even");
//   }else{
//     console.log("odd");
//   }
// }
// ev(12)


// const od = function (a){
//   if(a%2==0){
//     console.log("even");
//   }else{
//     console.log("odd");
//   }

// }
// od(33)

 
//  let mno  =function (num1,num2){

//   if(num1%2==1 && num1 < 100){
//     return("yes");
//   }else if (num2%2===0 && num2>400 ){
//     return("no");
//   }else{
//     return ("hello")
//   }
// }--------------  &nbsp --------- 
// // let ans = mno(31,1002)
// console.log(mno(31,200000 ));

    //    *
//       * *
//      * * *
//     * * * *
//    * * * * *
// let a = 5
// for(let i = 1;i<=5;i++){
//       document.write("<br>")
//      for(let j = 5-i ;j>=1;j--){
//       document.write("&nbsp")
//      }
//      a--
//      for(let k = 5-a ;k>=1;k--){
//       document.write("* ");
 
//       }
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

 
for(let a = 5;a>=1;a--){
  let space = ""
document.write("<br>")
  for(let b = a;b>=1;b--){
    document.write("*")

  }
}
