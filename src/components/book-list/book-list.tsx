import * as React from "react";
import Grid from '@material-ui/core/Grid';
import { Book } from "../../models/book";
import { BookListCard } from "../book-list-card/book-list-card";

interface BookListProps {
    books: Book[];
}

const BookList: React.FunctionComponent<BookListProps> = ({ books }) => {
    if (books === null) {
        return <p>Loading books...</p>;
    }

    return (
        <Grid container spacing={2}>
            {
                books.map(b => <BookListCard key={b.id} book={b} />)
            }
        </Grid>
    );
};

export { BookList };
