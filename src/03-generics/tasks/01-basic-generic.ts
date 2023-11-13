/*

Затипизируйте данную функцию:

function append(el, list) {
  return list.concat(el)
}

*/

const append = <T>(el: T, list: T[]): T[] => list.concat(el);
