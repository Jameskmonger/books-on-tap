export interface Author {
    id: string;
    firstName: string;
    lastName: string;
}

export class AuthorBuilder {
    private id: string = "00000000-0000-0000-0000-000000000000";
    private firstName: string = "Bob";
    private lastName: string = "Jones";

    public build(): Author {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
}
