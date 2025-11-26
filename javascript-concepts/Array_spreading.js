// ⭐ Spread Operator (...)
// The spread operator (...) expands (spreads) the elements of an array, object, or iterable into individual items.

// It is mainly used for:
// Copying arrays/objects
// Merging arrays/objects
// Passing array elements as function arguments
// Creating new arrays/objects without mutating the originals

// 🔹 Array Spreading
// Array spreading creates a new array by spreading elements of an existing one.

// 1. Copying an Array
const teamMembers = ["Harish", "Meena", "Sonia"];

const teamCopy = [...teamMembers];

console.log(teamCopy);  
// ["Harish", "Meena", "Sonia"]

// 2. Merging Two Arrays
const singers = ["Karthik", "Priya"];
const drummers = ["Naveen", "Swetha"];

const bandGroup = [...singers, ...drummers];

console.log(bandGroup);
// ["Karthik", "Priya", "Naveen", "Swetha"]

// 3. Adding Extra Values While Spreading
const studentsList = ["Jatin", "Rekha"];

const updatedStudents = ["Instructor", ...studentsList, "Manager"];

console.log(updatedStudents);
// ["Instructor", "Jatin", "Rekha", "Manager"]

// 4. Passing Array as Arguments
function showHeights(a, b, c) {
  console.log(a, b, c);
}

const heightValues = [160, 172, 181];

showHeights(...heightValues);
// 160 172 181