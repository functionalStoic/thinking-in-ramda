import {
  map,
  filter,
  curry,
  __,
  pipe,
  prop,
  propEq
} from 'ramda';

// const publishedInYear = curry(
//   (year, book) => book.year === year
// );

// partially applied waiting for book that filter will provide
// const publishedInYear = year => book => book.year === year;

// Using propEq
const publishedInYear = year => propEq('year', year);

// const titlesForYear = (books, year) => {
//   const selected = filter(publishedInYear(year), books);

//   return map(book => book.title, selected);
// };

// Piped version of titlesForYear
// const titlesForYear = curry((year, books) =>
//   pipe(
//     filter(publishedInYear(year)),
//     map(book => book.title)
//   )(books)
// );

// Using prop
const titlesForYear = year =>
  pipe(filter(publishedInYear(year)), map(prop('title')));

const myBook = {
  year: 2017,
  title: 'Jason Learns to Program'
};

const myBooks = [myBook];
console.log(publishedInYear(2017)(myBook));

const NotYet = titlesForYear(2017);
console.log(NotYet);
const OkNow = NotYet(myBooks);
console.log(OkNow);
const threeArgs = curry((a, b, c) => {
  console.log(a, b, c);
});

const middleArgumentLater = threeArgs(
  'value for a',
  __,
  'value for c'
);
middleArgumentLater('value for b');

const middleArgumentOnly = threeArgs(__, 'value for b', __);

middleArgumentOnly('value for a', 'value for c');
