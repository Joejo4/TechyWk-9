// Import default export and named exports
import formatCurrency, { add, capitalize, APP_VERSION } from "./utils.js";

console.log("Sum (2 + 3):", add(2, 3));
console.log("Capitalized:", capitalize("react"));
console.log("App Version:", APP_VERSION);
console.log("Formatted Currency:", formatCurrency(45000));
