import { Pizzeria } from "./pizzeria/pizzeria";
import { PIZZA_NAMES, pizzaReceipts } from "./data/receipts";
import { DOUGH_TYPE, PIZZA_SIZE } from "./data/types";


const pizzeria = new Pizzeria("Lisitsa", "Tverskaya st, 24", "10.00 - 24.00");
const order = pizzeria.createOrder();
order.addPizza(
  PIZZA_NAMES.SUPREME,
  PIZZA_SIZE.LARGE,
  pizzaReceipts[PIZZA_NAMES.SUPREME].prices[PIZZA_SIZE.LARGE],
  pizzaReceipts[PIZZA_NAMES.SUPREME].toppings,
  DOUGH_TYPE.FERMENTED
);
order.addPizza(
  PIZZA_NAMES.VEGGIE_DELIGHT,
  PIZZA_SIZE.LARGE,
  pizzaReceipts[PIZZA_NAMES.VEGGIE_DELIGHT].prices[PIZZA_SIZE.LARGE],
  pizzaReceipts[PIZZA_NAMES.VEGGIE_DELIGHT].toppings,
  DOUGH_TYPE.THICK, ["cheese", "mushrooms"]
);
console.log(order.getMeals());
console.log(order.getFullPrice());
order.removeFromOrder(PIZZA_NAMES.VEGGIE_DELIGHT);