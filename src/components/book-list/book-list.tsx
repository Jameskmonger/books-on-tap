import * as React from "react";
import { Book } from "../../models/book";

interface BookListProps {
    books: Book[];
}

const BookList: React.FunctionComponent<BookListProps> = ({ books }) => {
    if (books === null) {
        return <p>Loading books...</p>;
    }

    return <p>{books[0].id}</p>;
};

export { BookList };
