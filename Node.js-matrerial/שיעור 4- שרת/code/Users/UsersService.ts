import { User } from "./UserModule";

export class UsersList {
    private constructor() {} // מונע יצירת מופע חדש מהמחלקה

    static users: User[] = [];

    static addUser(id: number, name: string) {
        this.users.push(new User(id,name));
    }

    static findUser(id:number): User | undefined
    {
        return this.users.find(u => u.id === id);
    }

    static getAllUsers(): User[] {
        return this.users;
    }

    static clear() {
        this.users = [];
    }
}