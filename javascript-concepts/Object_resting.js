// ⭐ Rest Operator (...) in JavaScript
// The rest operator (...) collects the remaining items of an array or object into a single variable.

// It is the opposite of the spread operator:
// Spread → expands items
// Rest → gathers items

// Used in:
// Destructuring (arrays & objects)
// Function parameters (collecting multiple arguments)

// 🔹 Rest Operator with Objects
// Rest collects the remaining object properties into a new object.

// 1. Basic Object Rest Example
const studentInfo = {
  name: "Lavanya",
  age: 21,
  course: "BCA",
  city: "Madurai"
};

const { name, age, ...otherDetails } = studentInfo;

console.log(name);          // Lavanya
console.log(age);           // 21
console.log(otherDetails);  // { course: "BCA", city: "Madurai" }

// 2. Extracting Specific Properties
const movieDetails = {
  title: "Mersal",
  director: "Atlee",
  hero: "Vijay",
  year: 2017
};

const { title, year, ...remainingInfo } = movieDetails;

console.log(title);         // Mersal
console.log(year);          // 2017
console.log(remainingInfo); // { director: "Atlee", hero: "Vijay" }

// 3. Rest with Nested Objects
const productData = {
  productName: "iPhone",
  price: 70000,
  specs: {
    color: "Black",
    storage: "128GB"
  },
  seller: "Anand"
};

const { productName, ...otherProductData } = productData;

console.log(productName);       // iPhone
console.log(otherProductData);  // { price: 70000, specs: {...}, seller: "Anand" }

// ⚡ Key Points to Remember

// Written as ...
// Collects leftover values into an array or object
// Opposite of the spread operator

// ✔ Object Rest
// Must also appear at the end of the object pattern
// Collects remaining properties into a new object

// ✔ Function Parameters

// Rest allows unlimited arguments
// Replaces the older arguments object
// Always forms an array

// ✔ Important
// Rest does not mutate the original array/object
// Rest makes copies (shallow copy)