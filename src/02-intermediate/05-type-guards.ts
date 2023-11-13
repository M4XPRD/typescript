export {};

type Fish = {
  swim: () => void,
};

type Bird = {
  fly: () => void,
};

const isFish = (pet: Fish | Bird): pet is Fish => (pet as Fish).swim !== undefined;

const move = (animal: Fish | Bird) => {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
};

const animal1 = {
  swim: () => console.log('I swim'),
};

const animal2 = {
  fly: () => console.log('I fly'),
};

move(animal1);
move(animal2);
