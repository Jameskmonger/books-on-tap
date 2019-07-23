import * as React from "react";
import { getBooks } from "../data/books";
import { BookListPage } from "../pages/book-list-page";

const App: React.FunctionComponent = () => {
    return <BookListPage getBooks={getBooks} />;
};

export { App };
