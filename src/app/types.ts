export class IDish {
  id: number;
  name: string;
  image: any;
  price: number;
  composition: string;
}
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
