import { context, u128, PersistentVector } from "near-sdk-as";



export class House {
  owner: string;
  price: number;
  status: number;
  index: number;
  description: string;

  constructor(public priceArg: number, descriptionArg: string, indexArg: number) {
    this.price = priceArg;
    this.owner = context.sender;
    this.description = descriptionArg;
    this.status = 0;
    this.index = indexArg;
  }
}

export const housesInStock = new PersistentVector<House>("m")