export {};

let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

let courseName: string = "Frontend Development";

// 2
// Typed functions with parameters and return type annotations
function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

// New typed function getArea
function getArea(width: number, height: number): number {
  return width * height;
}

console.log(addNumbers(10, 20)); // 30
console.log(isAdult(20)); // true
console.log(getArea(5, 4)); // 20
//3

// Define Student interface
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

// Create two Student objects
const studentOne: Student = {
  id: 1,
  name: "Chukwudi",
  age: 20,
  course: "Software Engineering",
  isActive: true,
};

const studentTwo: Student = {
  id: 2,
  name: "Zainab",
  age: 23,
  course: "Data Science",
  isActive: false,
};

// Define Instructor interface
interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

// Function to introduce instructor
function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

// Testing Instructor function
const instructorProfile: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"],
};

console.log(introduceInstructor(instructorProfile));
// Output: "Stanley teaches Cohort 8 and covers: HTML, CSS, JavaScript"

// 4
// Add correct array type annotations
let names: string[] = ["Ada", "Bola", "Chidi"];
let studentScores: number[] = [78, 90, 55, 88];

// Function with union type parameter (string or number) returning a string
function formatId(id: string | number): string {
  return String(id);
}

console.log(formatId(42)); // "42"
console.log(formatId("abc")); // "abc"
