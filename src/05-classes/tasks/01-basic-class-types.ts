/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
/*

Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод log недоступным для инстансов обоих классов.

*/

export class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }

  area(): number {
    return this.height * this.width;
  }

  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`);
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}
