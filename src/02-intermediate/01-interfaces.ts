// Дополнение Interface ===================================================
interface User {
  readonly email: string; // обязательный параметр который нельзя изменить
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

// interface Window {
// 	isAuth?: boolean;
// }
// window.isAuth
// ===================================================
interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth: number;
}

// Расширяемся от других interface можно использовать любое количество
interface Employee extends User, Person {
  contractStart: Date;
}

export interface Developer extends Employee {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code: (args: string) => void;
}

// class MyDeveloper implements Developer {}
