// Добавление требований
export function len<T extends { length: number}>(arg: T): number {
    return arg.length
}

len('abs');
len(['abc']);
len({ length: 3 });
// len(123);
// len(true)
const obj1 = { a: 1, length: 1};
len(obj1)

// object