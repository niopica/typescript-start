const numbers: number[] = [1, 2, 3, 4];
const numbers1: number[][] = [[1], [2], [3]];

const strs: string[] = [];
const strs1: Array<string> = [];

export interface Car {
  wheels: number;
  brand: string;
}

const cars: Car[] = [];
cars.push({ brand: 'Audi', wheels: 3 });

function printArr(arr: unknown[]): void {
  arr.forEach((el, index, array) => {
    console.log(`Элемент: ${el}, index: ${index}`);
  });
}
