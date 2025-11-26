// ⭐ Rest Operator (...) in JavaScript
// The rest operator (...) collects the remaining items of an array or object into a single variable.

// It is the opposite of the spread operator:
// Spread → expands items
// Rest → gathers items

// Used in:
// Destructuring (arrays & objects)
// Function parameters (collecting multiple arguments)

// 🔹 Rest Operator with Arrays
// The rest operator collects leftover elements after the ones you explicitly extract.

// 1. Basic Array Rest Example
const fruits = ["Mango", "Orange", "Banana", "Grapes"];

const [favFruit, secondFruit, ...otherFruits] = fruits;

console.log(favFruit);     // Mango
console.log(secondFruit);  // Orange
console.log(otherFruits);  // ["Banana", "Grapes"]

// 2. Rest with Different Extracted Values
const actors = ["Vijay", "Ajith", "Surya", "Karthi", "Vikram"];

const [leadActor, supportingActor, ...remainingActors] = actors;

console.log(leadActor);        // Vijay
console.log(supportingActor);  // Ajith
console.log(remainingActors);  // ["Surya", "Karthi", "Vikram"]

// 3. Rest Collecting Almost Everything
const singersList = ["Shreya", "Arijit", "Hariharan"];

const [starSinger, ...backupSingers] = singersList;

console.log(starSinger);      // Shreya
console.log(backupSingers);   // ["Arijit", "Hariharan"]

// 4. Rest with No Extra Elements
const pets = ["Bruno", "Milo"];

const [firstPet, ...otherPets] = pets;

console.log(firstPet);    // Bruno
console.log(otherPets);   // []

// 🔹 Rest Operator in Functions
// The rest operator gathers multiple arguments into an array.

// 1. Simple Function Example
function addAllNumbers(firstNumber, ...remainingNumbers) {
  console.log(firstNumber);
  console.log(remainingNumbers);
}

// addAllNumbers(10, 20, 30, 40);
// firstNumber → 10
// remainingNumbers → [20, 30, 40]

// 2. Function Example with Names
function greetFriends(mainFriend, ...otherFriends) {
  console.log("Main:", mainFriend);
  console.log("Others:", otherFriends);
}

greetFriends("Keerthi", "Sahana", "Rithika", "Nimal");
// Main: Keerthi
// Others: ["Sahana", "Rithika", "Nimal"]

// ⚡ Key Points to Remember

// Written as ...
// Collects leftover values into an array or object
// Opposite of the spread operator

// ✔ Array Rest
// Can only appear at the end of the destructuring pattern
// ✔ Valid: [a, b, ...c]
// ✖ Invalid: [...a, b, c]
// Returns an array of remaining elements

// ✔ Function Parameters

// Rest allows unlimited arguments
// Replaces the older arguments object
// Always forms an array

// ✔ Important
// Rest does not mutate the original array/object
// Rest makes copies (shallow copy)