type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

const developer: Developer = {
  login: 'niopica@yandex.ru',
  skills: ['HTML', 'CSS', 'JS'],
  level: 'middle',
};

function gradeDeveloper(infoDevelop: Developer, newLevel: Level): void {
  const infoChangeLevel = (infoDevelop.level = newLevel);
  console.log('infoChangeLevel', infoChangeLevel);
}
gradeDeveloper(developer, 'senior');
