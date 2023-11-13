export {};

interface DataModel {
  id: string,
  title: string,
  elements: {
    header: {
      title: string,
      description: string,
      links: string[],
    },
    footer: {
      description: string,
      links: string[],
    },
    body: [
      {
        title: string,
        content: string[],
      },
    ]
  }
}

type T0 = DataModel['elements']['footer'];

type SomeTuple = [number, string, boolean, ...string[]];
const arr: SomeTuple = [1, 'asd', true, '', '', '', ''];

type T1 = SomeTuple[0]; // number

//

const sizes = ['small', 'medium', 'large'] as const;

type T2 = typeof sizes[number]; // union -> 'small' | 'medium' | 'large'
