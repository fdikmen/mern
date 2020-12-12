//import multiply,{sumNum as topla,divNum} from './mathModule'; //=>We can use the name we want with "AS" operator.
import * as mathMod from "./mathModule";

console.log("Hello!");

// console.log(sumNum(2, 5));   //=>Without "* as".
console.log(mathMod.sumNum(2, 5));

console.log(mathMod.divNum(2, 1));

console.log(mathMod.default(2, 4));
