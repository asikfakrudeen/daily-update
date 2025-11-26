// ⭐ Destructuring :
// Destructuring is a syntax that lets you 
// unpack values from arrays and extract properties from objects into individual variables in a concise way.
// It helps avoid repetitive code and makes assignments more readable.

// 🔹 Array Destructuring :
// Array destructuring allows you to extract values from an array based on their position (index) and assign them to variables.

// Syntax

const [a, b, c] = array;

// 1. Destructuring

const numbers = [10, 20, 30];

const [x, y, z] = numbers;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

const friends = ["Ravi", "Maya", "Karan"];

const [firstFriend, secondFriend, thirdFriend] = friends;

console.log(firstFriend);  // Ravi
console.log(secondFriend); // Maya
console.log(thirdFriend);  // Karan

// 2. Skipping Elements

const colors = ["red", "green", "blue"];

const [first, , third] = colors;

console.log(first); // "red"
console.log(third); // "blue"

const cities = ["Mumbai", "Chennai", "Bengaluru"];

const [majorCity, , techCity] = cities;

console.log(majorCity); // Mumbai
console.log(techCity);  // Bengaluru

// 3. Default Values

const marks = [85];

const [englishMark, mathsMark = 90] = marks;

console.log(englishMark); // 85
console.log(mathsMark);   // 90

// 4. Swapping Variables (beautiful use-case)

let studentA = "Arun";
let studentB = "Divya";

[studentA, studentB] = [studentB, studentA];

console.log(studentA); // Divya
console.log(studentB); // Arun

// 5. Destructuring in Function Parameters

function printCoord([x, y]) {
  console.log("X:", x, "Y:", y);
}

printCoord([100, 200]);

// Key Points to Remember

// Order matters (values assigned by index)
// You can skip elements
// You can assign default values
// Useful for swapping variables