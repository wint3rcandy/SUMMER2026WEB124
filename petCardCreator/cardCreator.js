function Pet(name, type, age, owner) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.owner = owner;
  this.id = Symbol(`${name} ID`);
}

Pet.prototype.getDescription = function () {
  return `${this.name} is a ${this.type} and is ${this.age} years old.`;
};

Pet.prototype.haveBirthday = function () {
  this.age += 1;
};

Pet.prototype.getOwnerName = function () {
  return this.owner?.name || "none";
};

Pet.prototype.getID = function () {
  return this.id;
};

const sirCrumpet = new Pet("Sir Crumpet", "cat", 4, { name: "Mayo" });
const cooper = new Pet("Cooper", "dog", 7);
const reginald = new Pet("reginald", "falcon", 2, { name: "Julias" });

const pets = [sirCrumpet, cooper, reginald];

function displayPet(pet) {
  console.log("Name:", pet.name);
  console.log("Type:", pet.type);
  console.log("Age:", pet.age);
  console.log("Owner name:", pet.getOwnerName());
}

for (const pet of pets) {
  displayPet(pet);
}

sirCrumpet.haveBirthday();
console.log("After Sir Crumpet's birthday:");
displayPet(sirCrumpet);

const currentDate = new Date();
console.log("Current date and time:", currentDate);

// Reflection:
// 1. In the constuctor this refers to the new pet object being created.
// In the methods, this refers to the pet object that is calling the method.

// 2. Optional chaining checks whether owner exists before trying to read
// owner.name

// 3. The Date object can be useful because it can store and display
// current dates and times. Which can help coding a plethora of things 
// like work schedules.
