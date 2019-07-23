import * as React from "react";
import { Book } from "../models/book";
import { BookList } from "../components/book-list/book-list";

interface BookListPageProps {
    getBooks: () => Promise<Book[]>;
}

// not possible to have useEffect work with shallow-rendering for the tests
// so this is sadly not tested - but has been made into a super-thin layer
// passing data into the (tested) BookList component

const BookListPage: React.FunctionComponent<BookListPageProps> = ({ getBooks }) => {
    const [ books, setBooks ] = React.useState<Book[]>(null);

    React.useEffect(() => {
        const get = async () => {
            const books = await getBooks();

            setBooks(books);
        };

        get();
    }, [getBooks]);

    return <BookList books={books} />;
};

export { BookListPage };
