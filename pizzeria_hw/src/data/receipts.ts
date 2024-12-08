//Енам с названиями ваших пицц
export enum PIZZA_NAMES {
  SUPREME = "Supreme",
  VEGGIE_DELIGHT = "Veggie Delight",
  BBQ_CHICKEN = "BBQ Chicken",
  SEAFOOD_SPECIAL = "Seafood Special"
}
 
import {PIZZA_SIZE} from './types'

export const pizzaReceipts = {
 
  [PIZZA_NAMES.SUPREME]: {
    toppings: ["pepperoni", "sausage", "bell peppers", "onions", "mushrooms", "olives", "extra cheese"],
    prices: {
      [PIZZA_SIZE.SMALL]: 60,
      [PIZZA_SIZE.MEDIUM]: 80,
      [PIZZA_SIZE.LARGE]: 110
    }
  },
  [PIZZA_NAMES.VEGGIE_DELIGHT]: {
    toppings: ["bell peppers", "olives", "spinach", "garlic"],
    prices: {
      [PIZZA_SIZE.SMALL]: 50,
      [PIZZA_SIZE.MEDIUM]: 75,
      [PIZZA_SIZE.LARGE]: 100
    }
  },
  [PIZZA_NAMES.BBQ_CHICKEN]: {
    toppings: ["chicken", "BBQ sauce"],
    prices: {
      [PIZZA_SIZE.SMALL]: 55,
      [PIZZA_SIZE.MEDIUM]: 70,
      [PIZZA_SIZE.LARGE]: 100
    }
  },
  [PIZZA_NAMES.SEAFOOD_SPECIAL]: {
    toppings: ["shrimp", "mushrooms", "onions", "garlic"],
    prices: {
      [PIZZA_SIZE.SMALL]: 65,
      [PIZZA_SIZE.MEDIUM]: 85,
      [PIZZA_SIZE.LARGE]: 115
    }
  }
   
};