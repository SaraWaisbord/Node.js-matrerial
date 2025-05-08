import {Restaurant} from "./services/RestuarantManager"
import {Order} from "./models/Order"
const restaurant: Restaurant = new Restaurant()
restaurant.addCustomer(1234,"Sara");
restaurant.addTable(4);
restaurant.addTable(2);
restaurant.addTable(0);
console.log("Adding tables");
restaurant.addCustomer(1235,"David");
restaurant.addCustomer(1236,"Maya");
restaurant.addCustomer(1237,"Shay");
restaurant.addCustomer(1238,"Lior");
console.log("Adding customers");
const order: Order = new Order(restaurant.Tables[0]);
const order2: Order = new Order(restaurant.Tables[1]);
const order3: Order = new Order(restaurant.Tables[2]);
console.log("Adding orders");
order.addItem("Pizza", 50);
order.addItem("Pasta", 40);
order2.addItem("Pizza", 50);
order2.addItem("Soda", 20);
order2.addItem("Pasta", 40);
order3.addItem("Pizza", 50);
order3.addItem("Salad", 30);
console.log("Adding items");
order.closeOrder();
order2.closeOrder();
order3.closeOrder();
console.log("Closing orders");

//HW
//1. Add export and import to the file that need V
//2. Use the restoraunt in App file (this one) V
//  1. Add tables (at least 3) V
//  2. Add customerws (at least 2) V
//  3/ create orders (at least 3) - one of them - will not have place V
//  4. add items to the orders (at least 2) V
//  5. close the orders V
//3. Check that the results are as expected V