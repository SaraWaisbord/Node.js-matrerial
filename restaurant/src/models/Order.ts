import { Table } from "./Table";
enum OrderStaus { OPEN,CLOSE}
export class Order
{
    
    table : Table;
    items: {name: string; price: number}[] = [];
    orderStatus:OrderStaus;

    constructor(table: Table)
    {
        this.table = table;
        this.table.OccupyTable();
        this.orderStatus = OrderStaus.OPEN;
    }

    addItem(name: string, price: number):void
    {
        this.items.push({name, price});
    }

    calculateTotal ():number
    {
        return this.items.reduce((total, item) => total + item.price, 0)
    }

    closeOrder():number
    {
        this.orderStatus = OrderStaus.CLOSE;
        this.table.FreeTable();
        return this.calculateTotal();
    }

    


}