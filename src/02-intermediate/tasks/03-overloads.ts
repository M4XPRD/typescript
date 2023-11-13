/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable max-len */
/*

Дана функция head, которая возвращает либо первый символ переданной строки, либо первый элемент переданного массива.

Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.

function head(value: string | number[] | boolean[]): string | number | boolean {
  return value[0];
}

*/

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return typeof value === 'string' ? value : value[0];
}
