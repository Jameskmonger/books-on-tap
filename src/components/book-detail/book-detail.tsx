import * as React from "react";
import { Book } from "../../models/book";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Loader } from "../loader/loader";
import { StockChip } from "../stock-chip/stock-chip";

interface BookDetailProps {
    book: Book;
}

const BookDetail: React.FunctionComponent<BookDetailProps> = ({ book }) => {
    if (book === null) {
        return <Loader />;
    }

    return (
        <Grid container spacing={2}>
            <Grid item>
                <img src={book.thumbnail} />
            </Grid>
            <Grid item xs={12} sm container>
                <Paper className="book-detail">
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="h4">
                        {book.author.firstName} {book.author.lastName}
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item>
                            <StockChip stockAmount={book.stockAmount} />
                        </Grid>

                        {
                            book.stockAmount > 0
                            && (
                                <Grid item xs={12} sm>
                                    <Button color="primary">Order Book</Button>
                                </Grid>
                            )
                        }
                    </Grid>

                    <Divider className="divider" />

                    <Typography>
                        {book.description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export { BookDetail };
