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

import { context, Context, logging, storage } from 'near-sdk-as';
import { House, housesInStock } from './models'



const contractOwner = context.sender; //SECURITY VALIDATION
const housesInStockNumIndex = housesInStock.length;


//FUNCTION TO MINT A NEW HOUSE -- ONLY CONTRACT OWNER
export function createHouse(price: number, description: string): House {
  const newHouse = new House(price, housesInStockNumIndex, description); //SEARCHING PURPOSE
  housesInStock.push(newHouse);
  logging.log(newHouse) //DEBUGGING
  return newHouse
}

//FUNCTION TO REMOVE ALL HOUSES
export function deleteHouses(): void{
  while(housesInStock.length > 0) {
    housesInStock.pop();
  }
}

  //FUNCTION TO BUY A HOUSE AS A CLIENT

  //FUNCTION TO SEE CONTRACT OWNER
export function getOwner(): string {
  return contractOwner;
}


//FUNCTION TO SELL A HOUSE AS A CLIENT 
export function buyHouse(houseIndex: i32): bool {
  
  if(!housesInStock[houseIndex]){
    logging.log("No existe la casa")
    return false
  }
  housesInStock[houseIndex].setOwner();
  housesInStock[houseIndex].setStatusSold();
  logging.log(housesInStock[houseIndex]);
  return true
}

//GET HOUSES NUMBER
export function getNumHouses(): number{
  return housesInStockNumIndex;
}

//GET HOUSES
export function getHouses(): House[] {
  const result = new Array<House>(housesInStockNumIndex);
  for(let i = 0; i < housesInStockNumIndex; i++) {
    result[i] = housesInStock[i];
  }
  return result;
}

//GET CONTRACT MONEY
