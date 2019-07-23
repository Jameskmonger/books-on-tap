import * as React from "react";
import { BookList } from "./book-list/book-list";
import { getBooks } from "../data/books";

const App: React.FunctionComponent = () => {
    return <BookList getBooks={getBooks} />;
};

export { App };
