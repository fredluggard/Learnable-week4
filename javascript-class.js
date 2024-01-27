class People {
  constructor(names, color) {
    this.otherName = names;
    this.eyeColor = color;
  }

  // Instance properties
  name = "Fred";
  hairColor = "Black";
  age = 25;
  bloodGroup = "A+";

  // Instance method
  friendList() {
    return "Somto, Livinus";
  }

  // Static property
  static dna = "Unknown";

  // Static method
  static getDna() {
    return People.dna;
  }
}

let person = new People("Ebuka", "blue");
console.log(person);
console.log(person.friendList());

// Accessing static property
console.log(People.dna);

// Accessing static method
console.log(People.getDna());
