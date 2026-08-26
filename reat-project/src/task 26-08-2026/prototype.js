// Parent Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Child Class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Calls the parent class constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

// Creating an object
const student1 = new Student("Abhiram", 22, "JavaScript");

student1.introduce();
student1.study();