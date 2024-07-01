// function findPalindromicNumber(num) {
//   let str = num.toString();
//   let revStr = str.split("").reverse().join();
//   if (str.length === 1) {
//     return true;
//   } else if (str.split("") == revStr) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findPalindromicNumber(123));
// console.log(findPalindromicNumber(1231));
// console.log(findPalindromicNumber(12521));
// console.log(findPalindromicNumber(3));
// console.log(findPalindromicNumber(121));

// function findNextNumber(...num) {
//   let different = num[1] - num[0];
//   let nextNumber = num[num.length - 1] + different;
//   return nextNumber;
// }

// console.log(findNextNumber(1, 2, 3));
// console.log(findNextNumber(10, 20, 30, 40, 50));

// function findObjectSum(obj) {
//   //   for (i of obj) {
//   //     return i;
//   //   }
//   return Object.values(obj)

//     .filter((value) => +value && value != true)
//     .reduce((sum, item) => sum + +item, 0);
// }

// console.log(findObjectSum({ a: 5, b: 6 }));
// console.log(findObjectSum({ a: 5, b: "6", c: true, d: "sdf" }));

// function duplicateNumber(num) {
//   let array = num.toString().split("");
//   let newNum = +array
//     .filter((item, index) => array.indexOf(item) === index)
//     .join("");
//   return newNum;
// }

// console.log(duplicateNumber(234511));

// function deleteLastQuest(str) {
//   if (!str.endsWith("?")) return str;
//   let array = str.split("");
//   for (let i = 0; i < array.length; i++) {
//     if (array[array.length - 1] === "?") {
//       array.pop();
//     }
//   }
//   return array.join("");
// }

// console.log(deleteLastQuest("salom??"));
// console.log(deleteLastQuest("salom"));
// console.log(deleteLastQuest("sal?om?"));
