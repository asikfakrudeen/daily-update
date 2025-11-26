// ⭐ Spread Operator (...)
// The spread operator (...) expands (spreads) the elements of an array, object, or iterable into individual items.

// It is mainly used for:
// Copying arrays/objects
// Merging arrays/objects
// Passing array elements as function arguments
// Creating new arrays/objects without mutating the originals

// 🔹 Object Spreading
// Object spreading copies properties from one object into another, producing a new object.

// 1. Copying an Object
const userProfile = {
  name: "Suhail",
  age: 32
};

const userCopy = { ...userProfile };

console.log(userCopy);
// { name: "Suhail", age: 32 }

// 2. Merging Objects
const contactInfo = {
  email: "ayesha@mail.com"
};

const personalInfo = {
  fullName: "Ayesha",
  city: "Hyderabad"
};

const completeProfile = {
  ...contactInfo,
  ...personalInfo
};

console.log(completeProfile);
// { email: "...", fullName: "Ayesha", city: "Hyderabad" }

// 3. Adding New Properties
const vehicleData = {
  model: "Swift",
  year: 2021
};

const updatedVehicle = {
  ...vehicleData,
  color: "White"
};

console.log(updatedVehicle);
// { model: "Swift", year: 2021, color: "White" }

// 4. Overriding Properties (last one wins)
const employeeInfo = {
  name: "Gowtham",
  role: "Tester"
};

const newRoleUpdate = {
  ...employeeInfo,
  role: "Team Lead"   // overrides the old role
};

console.log(newRoleUpdate);
// { name: "Gowtham", role: "Team Lead" }