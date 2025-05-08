export class Table
{
    isOccupied : boolean;   
    constructor(public tableId : number, public seats : number)
    {
        this.tableId = tableId;
        this.seats = seats
        this.isOccupied = false;
    }

    OccupyTable():boolean
    {
        if (this.isOccupied)
            return false;
        this.isOccupied = true;
        return true;
    }

    FreeTable():boolean
    {
        if (!this.isOccupied)
            return false;
        this.isOccupied = false;
        return true;
    }
}