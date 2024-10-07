// type - ее ещё называют алиасом
export type myBoolean = true | false;

type Pair = [string, string];
type Pairs = Pair[];

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
};
