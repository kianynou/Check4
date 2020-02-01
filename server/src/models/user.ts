export class User {
    id!: number;
    username!: string;
    email!: string;
    password!: string;
    role!: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}