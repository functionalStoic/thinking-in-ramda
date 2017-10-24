import {
  forEach,
  map,
  filter,
  reject,
  find,
  reduce
} from 'ramda';
import { isEven } from './utils';

const double = x => x * 2;
const add = (accum, value) => accum + value;

const myArray = [
  'Jason',
  'Andrea',
  'Ellie',
  'Mac',
  'Poppy'
];

forEach(value => console.log(value), myArray);
console.log(map(double, [1, 2, 3]));
console.log(filter(isEven, [1, 2, 3, 4]));
console.log(reject(isEven, [1, 2, 3, 4]));
console.log(find(isEven, [1, 2, 3, 4]));

console.log(reduce(add, 5, [1, 2, 3, 4]));
