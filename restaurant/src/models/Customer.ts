import { Order } from "./Order";
export class Customer
{
    orders: Order[] = [];
    constructor(public id : number, public name:string) {

        
    }

    addOrder(order : Order): Order[]
    {
        this.orders.push(order);
        return this.orders;
    }




}