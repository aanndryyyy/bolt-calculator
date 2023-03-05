import { CarType } from './Car';
import type { Car } from './Car';
 
const cars: Car[] = [
  {
    name: "Audi A1",
    type: CarType.Everyday,
    price: {
      km:     0.24,
      minute: 0.16,
      hour:   7.99,
      day:    30.90,
    }
  },
  {
    name: "Audi A3",
    type: CarType.Everyday,
    price: {
      km:     0.25,
      minute: 0.18,
      hour:   7.99,
      day:    33.89,
    }
  },
  {
    name: "Audi e-tron",
    type: CarType.Premium,
    price: {
      km:     0.25,
      minute: 0.69,
      hour:   39.90,
      day:    149.90,
    }
  },
  {
    name: "Audi Q2",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.17,
      hour:   7.99,
      day:    33.89,
    }
  },
  {
    name: "Hyundai i20",
    type: CarType.Everyday,
    price: {
      km:     0.24,
      minute: 0.13,
      hour:   4.99,
      day:    27.90,
    }
  },
  {
    name: "Kia Picanto",
    type: CarType.Everyday,
    price: {
      km:     0.22,
      minute: 0.13,
      hour:   4.99,
      day:    27.89,
    }
  },
  {
    name: "Mercedes Sprinter",
    type: CarType.Cargo,
    price: {
      km:     0.27,
      minute: 0.15,
      hour:   7.90,
      day:    37.90,
    }
  },
  {
    name: "Toyota Corolla",
    type: CarType.Everyday,
    price: {
      km:     0.25,
      minute: 0.15,
      hour:   6.29,
      day:    29.89,
    }
  },
  {
    name: "Toyota C-HR",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.18,
      hour:   7.99,
      day:    35.89,
    }
  },
  {
    name: "Toyota Land Cruiser",
    type: CarType.Premium,
    price: {
      km:     0.34,
      minute: 0.49,
      hour:   19.90,
      day:    79.90,
    }
  },
  {
    name: "Toyota RAV4",
    type: CarType.Premium,
    price: {
      km:     0.25,
      minute: 0.30,
      hour:   12.90,
      day:    43.90,
    }
  },
  {
    name: "Toyota Yaris",
    type: CarType.Everyday,
    price: {
      km:     0.22,
      minute: 0.13,
      hour:   4.99,
      day:    27.89,
    }
  },
  {
    name: "Toyota Yaris Cross",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.18,
      hour:   6.99,
      day:    33.89,
    }
  },
  {
    name: "VW Arteon",
    type: CarType.Premium,
    price: {
      km:     0.25,
      minute: 0.30,
      hour:   12.90,
      day:    43.90,
    }
  },
  {
    name: "VW e-Crafter",
    type: CarType.Cargo,
    price: {
      km:     0.27,
      minute: 0.13,
      hour:   6.90,
      day:    35.90,
    }
  },
  {
    name: "VW Crafter",
    type: CarType.Cargo,
    price: {
      km:     0.27,
      minute: 0.13,
      hour:   6.90,
      day:    35.90,
    }
  },
  {
    name: "VW T-Cross",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.16,
      hour:   6.99,
      day:    33.89,
    }
  },
  {
    name: "VW T-Roc",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.16,
      hour:   6.99,
      day:    33.89,
    }
  },
  {
    name: "VW T-Roc Cabrio",
    type: CarType.Premium,
    price: {
      km:     0.25,
      minute: 0.16,
      hour:   6.99,
      day:    33.89,
    }
  },
  {
    name: "Škoda Scala",
    type: CarType.Everyday,
    price: {
      km:     0.22,
      minute: 0.13,
      hour:   4.99,
      day:    27.89,
    }
  },
  {
    name: "Škoda Fabia",
    type: CarType.Everyday,
    price: {
      km:     0.24,
      minute: 0.13,
      hour:   4.99,
      day:    27.90,
    }
  },
  {
    name: "Škoda Kamiq",
    type: CarType.EverydaySuv,
    price: {
      km:     0.25,
      minute: 0.16,
      hour:   6.99,
      day:    33.89,
    }
  },
];

export default cars;