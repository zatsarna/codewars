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
/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.
*/
const sumSquareEvenRootOdd = (ns) => {
  let newArr = [];
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] % 2 === 0) {
      newArr.push(ns[i] ** 2);
    } else {
      newArr.push(Math.sqrt(ns[i]));
    }
  }
  return Number(newArr.reduce((sum, item) => sum + item, 0).toFixed(2));
};
/*Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874*/
function maxProduct(a) {
  a.sort((a, b) => b - a);
  return a[0] * a[1];
}
/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
function getAverage(marks) {
  return Math.round(marks.reduce((sum, el) => sum + el, 0) / marks.length);
}
console.log(getAverage([1, 2, 4]));

/*Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.*/
function mostFrequentItemCount(collection) {
  const numbersSet = new Set(collection);
  let newArr = [];
  let count = 0;
  for (const i of numbersSet) {
    for (const j of collection) {
      if (i === j) count++;
    }
    newArr.push([i, count]);
    count = 0;
  }
  let maxNum = 0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i][1] > maxNum) {
      maxNum = newArr[i][1];
    }
  }
  return maxNum;
}
console.log(mostFrequentItemCount([-1, -1, -1, 2, 1, 1]));

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/

function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size;
}
console.log(isIsogram("absd"));
/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/
function findOdd(A) {
  let newObj = {};
  for (let i of new Set(A)) {
    newObj[i] = 0;
  }
  for (let j = 0; j < A.length; j++) {
    newObj[A[j]]++;
  }
  for ([key, value] of Object.entries(newObj)) {
    if (value % 2 === 1) {
      return Number(key);
    }
  }
}

/*Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2*/

function digitalRoot(n) {
  let arr = String(n)
    .split("")
    .reduce((sum, i) => sum + Number(i), 0);

  if (arr > 9) {
    return digitalRoot(arr);
  } else {
    return arr;
  }
}

/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

function arrayDiff(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}
console.log(arrayDiff([1, 2, 2], [1]));

/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((sum, j) => sum + j, 0);
}
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"*/

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!*/
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}
/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

function moveZeros(arr) {
  return [...arr.filter((el) => el !== 0), ...arr.filter((el) => el === 0)];
}
/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)*/
function humanReadable(seconds) {
  let hours = Math.trunc(seconds / 3600);
  let minutes = Math.trunc((seconds % 3600) / 60);
  let sec = seconds % 60;
  return `${hours < 10 ? "0" + hours.toString() : hours}:${
    minutes < 10 ? "0" + minutes.toString() : minutes
  }:${sec < 10 ? "0" + sec.toString() : sec}`;
}

console.log(humanReadable(0));

//closure example
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = header.style.color === "blue" ? "red" : "blue";
  });
})();

/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text) {
  let count = 0;
  let set = new Set(text.toLowerCase().split(""));
  for (const el of set) {
    if (
      text
        .toLowerCase()
        .split("")
        .slice(text.toLowerCase().split("").indexOf(el) + 1)
        .includes(el)
    ) {
      count++;
    }
  }
  return count;
}
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/
function spinWords(string) {
  return string
    .split(" ")
    .map((el) => (el.length >= 5 ? el.split("").reverse().join("") : el))
    .join(" ");
}
