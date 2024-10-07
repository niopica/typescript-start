// 1. String
let string: string = 'String';
// 2. Numbers
let number: number = 10;
// 3. BigInt
let bigint: bigint = 1234n;
// 4. Boolean
let boolean: boolean = true;
// 5. Symbol
let symbol: symbol = Symbol('as');
// 6. Undefined nothing
let Undefined: undefined = undefined;
// 7. Null nothing
let Null: null = null;

// NaN
let nan: number = NaN;

// literal num: 108 - вместо типа указан литерал, фиксированное значение константы
const num = 108; // type 108
const str = 'literal'; // type literal

// universal
let any: any = 1; // any могут содержать значения любого типа данных, не рекомендуемый тип
let unknow: unknown = 666; // тип переменной неизвестен, требуется дополнительная проверка на тип
