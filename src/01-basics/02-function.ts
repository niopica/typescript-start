function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 4);

function log(name: string, userId?: string): void {
  console.log('Hello', name, 'witch ID', userId || 'anonym');
}
log('Nikita', '737');

function crash(): never {
  throw new Error('crash');
}

function average(...nums: number[]): number {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}
