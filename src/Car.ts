interface CarPrices {
  km:     number;
  minute: number;
  hour:   number;
  day:    number;
}

enum CarType {
  Everyday = 'Everyday',
  EverydaySuv = 'Everyday SUV',
  Premium = 'Premium',
  Cargo = 'Cargo',
}

interface Car {
  name: string;
  type: CarType;
  price: CarPrices
}

export { CarType };
export type { Car };