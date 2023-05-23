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
/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */
function oddOrEven(array) {
  return array.reduce((sum, item) => sum + item, 0) % 2 === 0 ? "even" : "odd";
}
/*Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

*/
function fireFight(s) {
  return s
    .split(" ")
    .map((el) => {
      return el === "Fire" ? "~~" : el;
    })
    .join(" ");
}
console.log(fireFight("Mast Deck Engine Water Fire"));
/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.*/
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
console.log(getDivisorsCnt(54));

const friends = [
  { name: "Denis", money: 200, friends: ["Dima", "Yulia"] },
  { name: "Alex", money: 400, friends: ["Yulia", "Katya"] },
  { name: "Kirill", money: 150, friends: ["Pavel", "Irina"] },
];

for (let i = 0; i < friends.length; i++) {}
/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
 */
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  return numbers.filter(
    (el, index) => index !== numbers.indexOf(Math.min(...numbers))
  );
}
console.log(removeSmallest([7, 4, 1, 9, 2]));

/*In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ] */
function sortByArea(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let innerArr = [
      array[i],
      Array.isArray(array[i])
        ? array[i][0] * array[i][1]
        : 3.14 * array[i] * array[i],
    ];
    newArr.push(innerArr);
  }
  newArr.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  let newArr2 = [];
  for (let i = 0; i < newArr.length; i++) {
    newArr2.push(newArr[i][0]);
  }
  return newArr2;
}
/*Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2*/
function mostLikely(prob1, prob2) {
  let prob1Arr = prob1.split(":");
  let prob2Arr = prob2.split(":");
  return (
    Number(prob1Arr[0]) / Number(prob1Arr[1]) >
    Number(prob2Arr[0]) / Number(prob2Arr[1])
  );
}
console.log(mostLikely("1:2", "1:5"));
/*Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  [] */
function alternate(n, firstValue, secondValue) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? arr.push(firstValue) : arr.push(secondValue);
  }
  return arr;
}
console.log(alternate(5, true, false));

/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.*/
function squareDigits(num) {
  let arr = String(num).split("");
  return Number(arr.map((el) => Number(el) ** 2).join(""));
}
/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/
function friend(friends) {
  return friends.filter((el) => el.length === 4);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
