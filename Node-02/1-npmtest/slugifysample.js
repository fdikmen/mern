var slugify = require('slugify')
//import { slugify } from "slugify";

const text="some string first second";
console.log(slugify(text)); // some-string
 
// if you prefer something other than '-' as separator
console.log(slugify(text, '*'));  // some_string

const niceText=slugify(text, '///');

console.log(niceText);