export {};

const pairs: [string, string][] = [['key1', 'value1'], ['key2', 'value2']];

const data: [number, boolean, string] = [1, true, 'lodash'];

type SomeTuple = [number, string, boolean, ...string[]];
const arr: SomeTuple = [1, 'asd', true, '', '', '', ''];

// .csv

const doc: [string, string, number, Date][] = [];

doc.push(['Yuri', 'Moscow', 12, new Date(1986, 5, 5)]);
