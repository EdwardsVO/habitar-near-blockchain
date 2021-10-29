/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { context, Context, logging, storage, u128 } from 'near-sdk-as';
import { House, HouseRent, housesInStock, housesInStockRent, ONE_NEAR } from './models'




const contractOwner = context.sender; //SECURITY VALIDATION
const housesInStockNumIndex = housesInStock.length;
const  housesInStockRentNumIndex= housesInStockRent.length;
//let date: Date = new Date();

//FUNCTION TO MINT A NEW HOUSE -- ONLY CONTRACT OWNER
export function createHouse(price: number, description: string, location: string, rooms: number, toilets: number, size: number): House {
  const newHouse = new House(price, housesInStockNumIndex, description, location, rooms, toilets, size); //SEARCHING PURPOSE
  housesInStock.push(newHouse);
  logging.log(newHouse) //DEBUGGING
  return newHouse
}

export function createHouseRent(initialCost: number, price: number, description: string, location: string,
   rooms: number, toilets: number, size: number): HouseRent {
  
  const newHouseRent = new HouseRent(initialCost, 'today',price, housesInStockRentNumIndex, description, location, rooms, toilets, size); //SEARCHING PURPOSE
  housesInStockRent.push(newHouseRent);
  logging.log(newHouseRent) //DEBUGGING
  return newHouseRent
}

//FUNCTION TO REMOVE ALL HOUSES
export function deleteHouses(): void{
  while(housesInStock.length > 0) {
    housesInStock.pop();
  }
}

export function deleteHousesRent(): void{
  while(housesInStockRent.length > 0) {
    housesInStockRent.pop();
  }
}

  //FUNCTION TO BUY A HOUSE AS A CLIENT

  //FUNCTION TO SEE CONTRACT OWNER
export function getOwner(): string {
  return contractOwner;
}


//FUNCTION TO SELL A HOUSE AS A CLIENT 
export function buyHouse(houseIndex: i32): bool {
  let valor =   u128.from('10000000000000000000000000'); 


  if(housesInStock.length==0){
    logging.log("No hay casas registradas")
    return false
  }else if(housesInStock.length < houseIndex){
    logging.log("No existe la casa")
    return false
  }else{
    housesInStock[houseIndex].setOwner();
    housesInStock[houseIndex].setStatusSold();
    logging.log(housesInStock[houseIndex]);
    assert(context.attachedDeposit >= valor  , 'Es necesario adjuntar 10 NEAR')
    return true
  }
 
}

export function rentHouse(houseRentIndex: i32): bool {
  let valor =   u128.from('10000000000000000000000000'); 


  if(housesInStockRent.length==0){
    logging.log("No hay casas registradas")
    return false
  }else if(housesInStockRent.length < houseRentIndex){
    logging.log("No existe la casa")
    return false
  }else{
    housesInStockRent[houseRentIndex].setOwner();
    housesInStockRent[houseRentIndex].setStatusSold();
    logging.log(housesInStockRent[houseRentIndex]);
    assert(context.attachedDeposit >= valor  , 'Es necesario adjuntar 10 NEAR')
    return true
  }
 
}

//GET HOUSES NUMBER
export function getNumHouses(): number{
  return housesInStockNumIndex;
}

export function getNumHousesrent(): number{
  return housesInStockRentNumIndex;
}

//GET HOUSES
export function getHouses(): House[] {
  const result = new Array<House>(housesInStockNumIndex);
  for(let i = 0; i < housesInStockNumIndex; i++) {
    result[i] = housesInStock[i];
  }
  return result;
}

export function getHousesRent(): HouseRent[] {
  const result = new Array<HouseRent>(housesInStockRentNumIndex);
  for(let i = 0; i < housesInStockRentNumIndex; i++) {
    result[i] = housesInStockRent[i];
  }
  return result;
}

//GET CONTRACT MONEY
