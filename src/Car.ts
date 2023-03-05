interface CarPrices {
  km:     number;
  minute: number;
  hour:   number;
  day:    number;
}

interface Car {
  name: string;
  price: CarPrices
}

export type { Car };