import {add, subtract, multiply, divide} from './my_modules/calculator.js';
import {licenseCheck} from './my_modules/licenseCheck.js';
import chalk from 'chalk';
import .meta.url;


const license1 = new licenseCheck("Alice", "12345", "valid");
const license2 = new licenseCheck("Bob", "67890", "invalid");

console.log(chalk.bgCyanBright("Path:", import.meta.dirname));
console.log(chalk.green("Addition: ", add(5, 3)));
console.log(chalk.red("Subtraction: ", subtract(5, 3)));
console.log(chalk.yellow("Multiplication: ", multiply(5, 3)));
console.log(chalk.blue("Division: ", divide(5, 1)));  

console.log(chalk.green(license1.Checklicense()));
console.log(chalk.green(license1.Grantpermission()));
console.log(chalk.red(license2.Checklicense()));
console.log(chalk.red(license2.Grantpermission()));
console.log(chalk.bgGreen('my reg_number is BD/2025/TC3/103'));
  