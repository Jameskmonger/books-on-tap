import * as React from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { getBooks } from "../data/books";
import { BookListPage } from "../pages/book-list-page";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Container maxWidth="sm" className="hero">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Books on Tap
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    A lightweight React bookstore.
                </Typography>
            </Container>

            <Container maxWidth="md" className="content">
                <BookListPage getBooks={getBooks} />
            </Container>
        </>
    );
};

export { App };
