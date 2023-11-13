export {};

// Literal is a specific type with a specific value

// Useful utilities: Capitalize, Lowercase, Uppercase, Uncapitalize

type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${'' | Capitalize<Side>}`;
type Padding = `padding-${Side}`;

type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;

interface Car {
  brand: string,
  model: string,
  year: number,
}

type Factory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
};
