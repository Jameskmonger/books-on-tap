import * as React from "react";
import { Book } from "../../models/book";

interface BookListProps {
    getBooks: () => Promise<Book[]>;
}

const BookList: React.FunctionComponent<BookListProps> = ({ getBooks }) => {
    const [ books, setBooks ] = React.useState<Book[]>(null);

    React.useEffect(() => {
        const get = async () => {
            const books = await getBooks();

            setBooks(books);
        };

        get();
    }, [getBooks]);

    if (books === null) {
        return <p>Loading books...</p>;
    }

    return <p>{books[0].id}</p>;
};

export { BookList };
