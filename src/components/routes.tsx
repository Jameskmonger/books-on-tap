import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BookListPage } from "../pages/book-list-page";
import { getBooks } from "../data/books";

const Routes: React.FunctionComponent = () => {
    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => <BookListPage getBooks={getBooks} />}
            />
        </Router>
    )
};

export { Routes };
