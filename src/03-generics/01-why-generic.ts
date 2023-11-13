/* eslint-disable prefer-arrow/prefer-arrow-functions */
export {};

// Generics are used to simplify overloads and so on

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: Date[]): Date;
function head(value: any): any {
  return typeof value === 'string' ? value : value[0];
}

interface ModelData {
  title: string,
  value: string,
}
