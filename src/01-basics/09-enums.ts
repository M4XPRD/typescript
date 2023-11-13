export {};

enum ShapeKind {
  Circle,
  Square,
}

const myShape = ShapeKind.Circle;

interface Circle {
  kind: ShapeKind.Circle,
  radius: number,
}

interface Square {
  kind: ShapeKind.Square,
  sideLength: number,
}

const circle1: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
};

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}

enum Grades {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}

interface Dev {
  login: string,
  skills: string[],
  level: Grades,
}

const dev: Dev = {
  login: 'Tom',
  level: Grades.Junior,
  skills: ['HTML', 'CSS', 'TS'],
};

const gradeUp = (user: { level: Grades }) => {
  switch (user.level) {
    case Grades.Junior:
      user.level = Grades.Middle;
      break;
    case Grades.Middle:
      user.level = Grades.Senior;
      break;
    default:
      break;
  }
};

gradeUp(dev);

console.log(dev);
