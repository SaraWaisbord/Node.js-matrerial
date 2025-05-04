import {Restaurant} from "./services/RestuarantManager"

const restaurant: Restaurant = new Restaurant()
restaurant.addCustomer(1234,"Sara");
console.log(restaurant.findCustomer(1234));

//HW
//1. Add export and import to the file that need
//2. Use the restoraunt in App file (this one)
//  1. Add tables (at list 3)
//  2. Add customerws (at least 2)
//  3/ create orders (at least 3) - one of them - will not have place
//  4. add items to the orders (at least 2)
//  5. close the orders
//3. Check that the results are as expected