import {
  find,
  either,
  both,
  // anyPass,
  // allPass
  pipe,
  compose
} from 'ramda';
import { isOdd } from './utils';

// Complement. See utils.js for use of it.
// Used Complement to convert isEven to isOdd
console.log(find(isOdd, [1, 2, 3, 4]));

/**
 * both/either & anyPass/allPass 
 */
const OUR_COUNTRY = 'United States';
const wasBornInCountry = person =>
  person.birthCountry === OUR_COUNTRY;
const wasNaturalized = person =>
  Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

// const isCitizen = person =>
//   wasBornInCountry(person) || wasNaturalized(person);

// const isEligibleToVote = person => isOver18 && isCitizen;

const isCitizen = either(wasBornInCountry, wasNaturalized);
// const isCitizen2 = anyPass([
//   wasBornInCountry,
//   wasNaturalized
// ]);

const isEligibleToVote = both(isOver18, isCitizen);
// const isEligibleToVote2 = allPass([isOver18, isCitizen]);

/**
 * Pipelines & Compose
 */
const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

// const operate = (x, y) => {
//   const product = multiply(x, y);
//   const incremented = addOne(product);
//   const squared = square(incremented);

//   return squared;
// };
// pipe is left to right with args applied to left fn first
const operate = pipe(multiply, addOne, square);
// compose is right to left with args applied to right fn first
const operate2 = compose(square, addOne, multiply);

console.log(operate(3, 4));
console.log(operate2(3, 4));
