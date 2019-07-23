import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BookListPage } from "../pages/book-list-page";
import { getBooks, getBook } from "../data/books";
import { BookDetailPage } from "../pages/book-detail-page";

const Routes: React.FunctionComponent = () => {
    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => <BookListPage getBooks={getBooks} />}
            />
            <Route
                path="/book/:id"
                render={routeParams => <BookDetailPage getBook={getBook} id={routeParams.match.params.id} />}
            />
        </Router>
    )
};

export { Routes };
