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

const getIndex = housesInStock.length; //FOR INDEX 
const contractOwner = context.sender; //SECURITY VALIDATION


//FUNCTION TO MINT A NEW HOUSE -- ONLY CONTRACT OWNER
export function createHouse(price: number, description: string): House {
  const newHouse = new House(price, description, getIndex); //SEARCHING PURPOSE
  housesInStock.push(newHouse);
  logging.log(newHouse) //DEBUGGING
  return newHouse
}

//FUNCTION TO BUY A HOUSE AS A CLIENT


//FUNCTION TO SELL A HOUSE AS A CLIENT 

//GET HOUSES

//GET CONTRACT MONEY
