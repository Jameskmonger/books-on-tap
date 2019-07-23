import * as React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        <Grid container spacing={4}>
            {
                books.map(b => <BookListCard key={b.id} book={b} />)
            }
        </Grid>
    );//<p>{books[0].id}</p>;
};

export { BookList };
