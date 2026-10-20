//Part 1
//1. Converted to arrow functions with implicit returns
const square = (n) => n * n;
const greet = (name) => "Hello, " + name + "!";
const multiply = (a, b) => a * b;

// New arrow function to return full name
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Testing
console.log(square(4)); // 16
console.log(greet("Fisayo")); // Hello, Fisayo!
console.log(multiply(3, 5)); // 15
console.log(getFullName("Ajayi", "Oluwafisayo")); // Ajayi Oluwafisayo

//2.
const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja",
};
const scores = [88, 72, 95, 60, 45];

// Destructure name and course from student
const { name, course } = student;

// Destructure age from student and rename it to studentAge
const { age: studentAge } = student;

// Destructure first and second values from scores
const [firstScore, secondScore] = scores;

console.log(name, course); // Amaka Frontend Development
console.log(studentAge); // 22
console.log(firstScore, secondScore); // 88 72

//3.
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const userProfile = { username: "coder_ade", email: "ade@example.com" };

// Combine frontend and backend into a new array fullStack
const fullStack = [...frontend, ...backend];
console.log("FullStack:", fullStack);

// Create a new object from userProfile with updated email
const updatedUserProfile = { ...userProfile, email: "newemail@example.com" };

// Prove original is unchanged
console.log("Original email:", userProfile.email); // ade@example.com
console.log("Updated email:", updatedUserProfile.email); // newemail@example.com

//4.
const userName = "Fatima";
const age = 24;

// Rewritten introduction using template literals
const intro = `My name is ${userName} and I am ${age} years old.`;
console.log(intro);

// Rectangle area template literal
const width = 8;
const height = 5;
console.log(`The area of the rectangle is ${width * height}`);

//5.
const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true },
];

// 1. Get an array of just product names using .map()
const productNames = products.map((product) => product.name);
console.log("Names:", productNames);

// 2. Get only in-stock products using .filter()
const inStockProducts = products.filter((product) => product.inStock);
console.log("In Stock:", inStockProducts);

// 3. Combined: uppercase names of in-stock products
const uppercaseInStockNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());
console.log("Uppercase In-Stock Names:", uppercaseInStockNames);

//6.
const role = "editor";
const cartItems = 0;

// Ternary for access control based on role
const accessLevel =
  role === "admin"
    ? "Full Access"
    : role === "editor"
      ? "Edit Access"
      : role === "viewer"
        ? "Read Only"
        : "No Access";

console.log("Access Level:", accessLevel); // Edit Access

// Logical && evaluation
console.log(cartItems && "View Cart");

// Fix so "View Cart" only shows when there are actual items (> 0)
const safeCartCheck = cartItems > 0 && "View Cart";
console.log("Safe Cart Check:", safeCartCheck); // Evaluates to false (or can handle rendering logic properly)
