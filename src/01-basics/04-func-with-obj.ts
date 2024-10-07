// В параметрах функции указывается минимальный набор значений,
// остальное нас не интересует если больше, если не будет обязательных будет ошибка
function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: '1',
  y: '2',
};

printPoint(obj1);

const obj2 = {
  x: '1',
  y: '2',
  z: '3',
};

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log('Hello', user.firstName.toUpperCase());
  // 2 параметр не обязательный, но мы пытаемся его использовать.
  // Если он не прийдет, вылезет ошибка undefined, поэтому нужно создать проверку
  // Все что у нас не опционально нужно проверять на существование
  if (user.lastName) {
    console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
  }
}
printName({ firstName: 'Nikita' });
printName({ firstName: 'Nikita', lastName: 'Gal' });
