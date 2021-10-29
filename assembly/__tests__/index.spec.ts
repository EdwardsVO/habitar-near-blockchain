import { createHouse, buyHouse, getHouses, getNumHouses, getOwner, getNumHousesrent, rentHouse, getHousesRent } from "..";
import { context, Context, logging } from "near-sdk-as";
import { House, HouseRent, housesInStock, housesInStockRent } from "../models";

const price = 444.4
const description = 'Testing'
const index = 0;
const location = 'Caracas, Venezuela';
const rooms = 4;
const toilets = 5;
const size = 123;
let newHouse = new House(price, index, description, location, rooms, toilets, size);
const housesInStockNumIndex = housesInStock.length;
const housesRentNumIndex = housesInStockRent.length;

const resultRent = new Array<HouseRent>(housesRentNumIndex);
for (let i = 0; i < housesRentNumIndex; i++) {
    resultRent[i] = housesInStockRent[i];
}

const result = new Array<House>(housesInStockNumIndex);
for (let i = 0; i < housesInStockNumIndex; i++) {
    result[i] = housesInStock[i];
}


describe("createHouse", () => {
    it('should return "newHouse"', () => {
        expect(createHouse(444.4, 'Testing', 'Caracas, Venezuela', 4, 5, 123)).toStrictEqual(newHouse);
    })
});

describe("getHouses", () => {
    it('should return all the houses', () => {
        expect(getHouses()).toStrictEqual(result);
    })
})

describe("getHousesRent", () => {
    it('should return all the houses', () => {
        expect(getHousesRent()).toStrictEqual(resultRent);
    })
})

describe("getNumHouses", () => {
    it('Should delete everything', () => {
        expect(getNumHouses()).toBe(housesInStock.length);
    })
})

describe("getOwner", () => {
    it('should return owners smart contract', () => {
        expect(getOwner()).toBe(context.sender);
    })
})

describe("buyHouse", () => {
	it('should return False', () => {
		expect(buyHouse(0)).toBe(false)
	})
})

describe("rentHouse", () => {
	it('should return False', () => {
		expect(rentHouse(0)).toBe(false)
	})
})