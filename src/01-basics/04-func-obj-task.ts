// Создайте интерфейсы User и Admin.
// User должен содержать следующие ключи:
// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.
// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User {
  login: string;
  email: string;
  password: string;
  inOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  inOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user: User = {
  login: 'niopica',
  email: 'niopica@yandex.com',
  password: '12345',
  inOnline: true,
  lastVisited: new Date(2022, 6, 2),
};

const admin: Admin = {
  login: 'nio',
  email: 'nio@yandex.com',
  password: '123456789',
  inOnline: true,
  lastVisited: new Date(2024, 10, 7),
  role: 'SuperAdmin',
};

function login(user: { login: string; password: string }): void {
  if ((user.login.length > 0, user.password.length > 0)) {
    console.log(`Добро пожаловать`, user.login);
  }
}
login(user);
login(admin);
