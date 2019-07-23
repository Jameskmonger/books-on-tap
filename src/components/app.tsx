import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { getBooks } from "../data/books";
import { BookListPage } from "../pages/book-list-page";

const useStyles = makeStyles({
    hero: {
        padding: "4.5em 0 3.5em"
    },
    content: {
        padding: "0.5em 0"
    }
});

const App: React.FunctionComponent = () => {
    const classes = useStyles({});

    return (
        <>
            <Container maxWidth="sm" className={classes.hero}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Books on Tap
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    A lightweight React bookstore.
                </Typography>
            </Container>

            <Container className={classes.content} maxWidth="md">
                <BookListPage getBooks={getBooks} />
            </Container>
        </>
    );
};

export { App };
