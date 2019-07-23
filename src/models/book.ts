import { Author } from "./author";

export interface Book {
    id: string;
    title: string;
    author: Author;
    price: number;
    description: string;
    stockAmount: number;
    thumbnail: string;
    isbn: string;
}

export class BookBuilder {
    private id: string = "00000000-0000-0000-0000-000000000000";
    private title: string = "A Hitchhiker's Guide to the Galaxy";
    private author: Author;
    private price: number = 15;
    private description: string = "Lorem ipsum dolor sit amet";
    private stockAmount: number = 5;
    private thumbnail: string = "http://fake-thumnail.example";
    private isbn: string = "978-3-16-148410-0";

    public build(): Book {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            price: this.price,
            description: this.description,
            stockAmount: this.stockAmount,
            thumbnail: this.thumbnail,
            isbn: this.isbn
        };
    }
}
