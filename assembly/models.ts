import { context, u128, PersistentVector } from "near-sdk-as";
@nearBindgen
export class House {
  owner: string;
  price: number;
  status: number;
  index: number;
  description: string;

  constructor(public priceArg: number, indexArg: number, descriptionArg: string) {
    this.price = priceArg;
    this.owner = context.sender;
    this.description = descriptionArg;
    this.status = 0;
    this.index = indexArg;
  }

  setStatusSold(): bool {
    this.status = 1
    return true
  }
  setStatusInStock(): bool {
    this.status = 0
    return true
  }
  setOwner():void {
    this.owner = context.sender;
  }
}

export const housesInStock = new PersistentVector<House>("m")