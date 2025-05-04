import {Customer} from "../models/Customer";
export class Restaurant
{
    private TablesIndex: number = 100;
    Tables: Table[] = [];
    Customers: Customer[] = [];
    
    addTable(seats: number): boolean
    {
        this.Tables.push(new Table(this.TablesIndex++, seats));
        this.Tables.sort((tab) => tab.seats);
        return true;
    }

    addCustomer(Id: number, Name: string):boolean
    {
        if(this.Customers.find((cust) => cust.id == Id) != undefined)
            return false;
        this.Customers.push(new Customer(Id, Name));
        return true;
    }

    findCustomer(Id:number):Customer | undefined
    {
        return this.Customers.find((cust) => cust.id == Id)
    }

    addOrder(customerId:number, NumOfPeoples: number):Order | undefined
    {
        const table = this.Tables.find((tab)=> !tab.isOccupied && tab.seats >= NumOfPeoples);
        if(table == undefined)
        {
            console.log("there is no avalable table for this order");
            return undefined; 
        }
        const customer = this.findCustomer(customerId);
        if(customer == undefined)
        {
            console.log("Can't find the customer, pleas registry.");
            return undefined; 
        }
        const order =  new Order(table);
        customer.addOrder(order);
        return order;
    }


}