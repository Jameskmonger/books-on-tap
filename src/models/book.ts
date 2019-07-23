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
