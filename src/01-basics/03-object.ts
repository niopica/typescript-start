// 1 Вариант рекомендуемый
interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
};

const car2: Car = {
  wheels: 4,
  brand: 'Mers',
  type: '',
};

car2['go'] = true;

// 2 Вариант, неудобный для чтения
const car3: {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
} = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
};
