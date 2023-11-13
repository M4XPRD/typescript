export {};

const tuplePairCreator = <T>(first: T) => <U>(second: U): [T, U] => [first, second];

const toTupleWithBoth = tuplePairCreator(1)(2);

const toTupleWith2 = tuplePairCreator(2);
const val1 = toTupleWith2(2);
const val2 = toTupleWith2('sd');
