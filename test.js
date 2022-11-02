// function multiply(a, b){
//     return a * b
//   }
// 
// console.log(multiply(2, 4))
//------------------------------------------------------------------------------
// function evenOrOdd(number) {
//   if (number % 2 === 0){
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }
// 
// console.log(evenOrOdd(2))
// console.log(evenOrOdd(3))
// console.log(evenOrOdd(1023795))
//------------------------------------------------------------------------------
// function XO(str) {
//     let low_str = str.toLowerCase()
//     let count_x = 0;
//     let count_y = 0;
//     for (s of low_str){
//         if (s === 'x'){
//             count_x++;
//         } else if (s === 'o'){
//             count_y++;
//         };
//     };
//     return (count_x === count_y)
// };
// 
// console.log(XO("ooxx"));
// console.log(XO("xooxx"));
// console.log(XO("ooxXm"));
// console.log(XO("zpzpzpp"));
// console.log(XO("zzoo"));
//------------------------------------------------------------------------------
// function isValidWalk(walk) {
//     ns_dir = 0;
//     we_dir = 0;
//     for (w of walk){
//         if (w === 'n'){
//             ns_dir++
//         } else if (w === 's'){
//             ns_dir--
//         } else if (w === 'w'){
//             we_dir++
//         } else if (w === 'e'){
//             we_dir--
//         };
//     };
//     return (walk.length === 10 && ns_dir === 0 && we_dir === 0)
//   }
// 
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
//------------------------------------------------------------------------------
// function greet() {
//     return 'hello world!'
// }
//------------------------------------------------------------------------------
// var uniqueInOrder=function(iterable){
//     arr = []
//     item_new = ''
//     for (item of iterable){
//         if (item != item_new){
//             arr.push(item);
//             item_new = item
//         };
//     }; return arr;
//   }
// 
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder('ABBCcAD'))
// console.log(uniqueInOrder([1,2,2,3,3]))
//------------------------------------------------------------------------------
// function squareSum(numbers){
//     count = 0
//     if (numbers.length === 0){
//         return 0
//     } for (num of numbers){
//         count = count + num ** 2
//     } return count
// }
// 
// console.log(squareSum([1,2]));          // 5
// console.log(squareSum([0, 3, 4, 5]));   // 50
// console.log(squareSum([]));             // 0
//------------------------------------------------------------------------------
// function triNums(num){
//     for (let n = 2; n < 54771; n++){
//         let m = n-1
//         if (num >= ((n*(n+1)/2)**2) + ((m*(m+1)/2)**2)){
//             if (num === ((n*(n+1)/2)**2) + ((m*(m+1)/2)**2)){
//                 return true
//             } else {trinum = (n*(n+1)/2)};
//         } else { return false };
//     };
// };
// 
// console.log(triNums(6))
// console.log(triNums(45))
// console.log(triNums(1499137146))