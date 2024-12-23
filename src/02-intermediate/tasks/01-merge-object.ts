// Create two variants: aliases and interface
// Product: Price, isNew, isSale, title
// Vehicle: wheels, year, brand
// Car: type, model +Product +Vehicle

// Interface
export interface IProduct {
  title?: string;
  price?: number;
  isNew?: boolean;
  isSale?: boolean;
}

export interface IVehicle {
  wheels?: number;
  year?: number;
  brand?: string;
}

export interface ICar extends IProduct, IVehicle {
  type?: string;
  model?: string;
}
// Aliases
export type Product = {
  price?: number;
  isNew?: boolean;
  isSale?: number;
  title?: string;
};

export type Vehicle = {
  wheels?: string;
  year?: number;
  brand?: string;
};

export type Car = Product &
  Vehicle & {
    type?: string;
    model?: string;
  };
