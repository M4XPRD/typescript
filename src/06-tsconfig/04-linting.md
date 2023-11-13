# Дополнительный линтинг

1. `"noPropertyAccessFromIndexSignature"` запрещает обращаться к свойствам объекта через точку a.k.a. dot notation, если свойства объекта описаны не явно, а через произвольные параметры (aka arbitrarily-named properties, index signatures).

```ts
interface Inter {
  name: string,
  [k: string]: string,
}

const in1: Inter = {
  name: 'abcd',
  surname: 'N',
}

in1.name;
in1.surname; // Будет ошибка, т.к. surname не указан явно
in1['surname']; // Правильное использование

```

2. `"noUncheckedIndexedAccess"` добавляет `undefined` ко всем необъявленным полям.


```ts
interface Inter {
  name: string,
  [k: string]: string | undefined,
}

const in1: Inter = {
  name: 'abcd',
  surname: 'N',
}

in1.name;
in1['surname'].length; // Будет ошибка, т.к. возможно surname === undefined
in1['surname']; // undefined автоматически добавляется к [k: string]: string

```

3. `"noImplicitReturns"` проверяет, чтобы все ветки функции возвращали значение.

```ts
const add = (num: number | string) => {
  if (typeof num === 'number') {
    return num + 1;
  }
  // Будет ошибка, т.к. при сценарии string нет return'а
};

```

4. `"noFallthroughCasesInSwitch"` явно проверяет break в switch.

5. `"noUnusedLocals"` проверяет использование локальных переменных.

6. `"noUnusedParameters"` проверяет неиспользуемые параметры.