// ⭐ Destructuring :
// Destructuring is a syntax that lets you 
// unpack values from arrays and extract properties from objects into individual variables in a concise way.
// It helps avoid repetitive code and makes assignments more readable.

// 🔹 Object Destructuring
// Object destructuring extracts properties(values) from an object based on property names and assign them to variables.

// syntax
const { key1, key2 } = object;

// 1. Basic Example
const employee = {
  fullName: "Nisha Raj",
  age: 28,
  department: "Finance"
};

const { fullName, age, department } = employee;

console.log(fullName);   // Nisha Raj
console.log(age);        // 28
console.log(department); // Finance

// 2. Renaming While Destructuring
const player = {
  playerName: "Rahul",
  level: 7
};

const { playerName: gamerName, level: stageLevel } = player;

console.log(gamerName); // Rahul
console.log(stageLevel); // 7

// 3. Default Values
const shopper = { id: 101 };

const { id, membership = "Regular" } = shopper;

console.log(id);         // 101
console.log(membership); // Regular

// 4. Nested Object Destructuring
const author = {
  name: "Lakshmi",
  address: {
    city: "Coimbatore",
    pinCode: 641001
  }
};

const { 
  name,
  address: { city, pinCode }
} = author;

console.log(name);    // Lakshmi
console.log(city);    // Coimbatore
console.log(pinCode); // 641001

// 5. Object Destructuring in Function Parameters

function showProfile({ username, followers }) {
  console.log("User:", username);
  console.log("Followers:", followers);
}

showProfile({ username: "Manoj", followers: 1200 });

// ⚡ Key Points to Remember

// Order does NOT matter (name-based)
// Keys must match
// You can rename variables
// Supports default values
// Supports nested object extraction