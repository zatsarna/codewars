/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */
function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  );
}

/*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */
const countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
console.log(countSheep(3));

/*To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer*/
var cubeChecker = function (volume, side) {
  return volume <= 0 || side <= 0 ? false : side ** 3 === volume;
};
console.log(cubeChecker(8, 1));

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    ["a", "e", "i", "o", "u"].includes(arr[i]) ? count++ : count;
  }
  return count;
}
console.log(getCount("liuda"));

/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/

function rowSumOddNumbers(n) {
  let arrAll = [];
  let newArr = [];
  let countNumbers = (1 + n) * 0.5 * n;
  let number = 1;
  for (let i = 0; i < countNumbers; i++) {
    arrAll.push(number);
    number += 2;
  }
  for (let i = 0; i < n; i++) {
    let x = arrAll.pop();
    newArr.push(x);
  }
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
