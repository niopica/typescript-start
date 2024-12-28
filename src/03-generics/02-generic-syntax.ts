// Array<string> - generic
// string[] - generic
// Promise<number>

type TypeFactory<T> = T;
type Xtype = TypeFactory<string>
type Xtype2 = TypeFactory<boolean>

function toArray<T>(...arg: T[]): T[] {
    return arg
}

toArray<number>(1,2,3)
toArray('ad', 'asd')

// ==================================================

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
    return value[0];
}
head(['12q', 'ads'])

const head1 = <T>(value: T[]): T => value[0]

export interface ModelData<T> {
    title: string;
    value: T, // number [] boolean
}

const obj1: ModelData<number> = {
    title: 'asd',
    value: 1414
}
// obj1.value = true;
const obj2: ModelData<Array<number>> = {
    title: 'as141',
    value: [1234]
}