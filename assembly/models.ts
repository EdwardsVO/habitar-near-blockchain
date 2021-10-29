import { context, u128, PersistentVector } from "near-sdk-as";
@nearBindgen
export class House {
  owner: string;
  price: number;
  status: number;
  index: number;
  description: string;
  location: string;
  rooms: number;
  toilets: number;
  size: number;  


  constructor(public priceArg: number, indexArg: number, descriptionArg: string, locationArg: string,
     roomsArg: number, toiletsArgs: number, sizeArgs: number) {
    this.price = priceArg;
    this.owner = context.sender;
    this.description = descriptionArg;
    this.status = 0;
    this.index = indexArg;
    this.description = descriptionArg;
    this.location = locationArg;
    this.rooms = roomsArg;
    this.toilets = toiletsArgs;
    this.size = sizeArgs
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

export class HouseRent{  owner: string;
  priceRent: number;
  statusRent: number; 
  indexRent: number;
  descriptionRent: string;
  locationRent: string;
  roomsRent: number;
  toiletsRent: number;
  sizeRent: number;   
  dateStartRent: string;
  dateEndRent: string;
  initialCost: number;
  ownerRent: string; 
  dateStart: string;
  dateEnd: string;

  constructor (public initialCostArgRent: number,  dateStartArg: string, dataEndArg: string, public priceArgRent: number,
     indexArgRent: number, descriptionArgRent: string, locationArgRent: string, roomsArgRent: number, toiletsArgsRent: number, 
     sizeArgsRent: number ){
      this.priceRent = priceArgRent;
      this.ownerRent = context.sender;
      this.descriptionRent = descriptionArgRent;
      this.statusRent = 0;
      this.indexRent = indexArgRent;
      this.descriptionRent = descriptionArgRent;
      this.locationRent = locationArgRent;
      this.roomsRent = roomsArgRent;
      this.toiletsRent = toiletsArgsRent;
      this.sizeRent = sizeArgsRent
      this.ownerRent = context.sender;
    this.dateStart = dateStartArg;
    this.dateEnd = dataEndArg;
    this.initialCost = initialCostArgRent;

  }

  setStatusSold(): bool {
    this.statusRent = 1
    return true
  }
  setStatusInStock(): bool {
    this.statusRent = 0
    return true
  }
  setOwner():void {
    this.ownerRent = context.sender;
  }
}
export const ONE_NEAR = u128.from('10000000000000000')
export const housesInStock = new PersistentVector<House>("m")
export const housesInStockRent = new PersistentVector<HouseRent>("m")