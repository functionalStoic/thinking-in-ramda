import { complement } from 'ramda';

export const isEven = x => x % 2 === 0;
export const isOdd = complement(isEven);
