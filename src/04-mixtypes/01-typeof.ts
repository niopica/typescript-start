import { average } from '../01-basics/02-function'
console.log(typeof 'adsz');

export let str = 'Hello World!';
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers)
max(1, 2, 3)

type returnFm = ReturnType<typeof average>
