export class IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export class IUser {
  email: string;
  password: string;
}

export class IData {
  id: number;
  telefonNumber: string;
  adress: string;
  sum: number;
  basketsProduct: Array<IProduct>;
}
