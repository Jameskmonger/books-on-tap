import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Book } from "../../models/book";

interface BookListCardProps {
    book: Book;
}

const BookListCard: React.FunctionComponent<BookListCardProps> = ({ book }) => {
    return (
        <Grid item xs={12} sm={6} md={4} className="book-list-card">
            <Card className="card">
                <CardMedia
                    className="media"
                    image={book.thumbnail}
                    title={book.title}
                />
                <CardContent className="content">
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h4" align="right">
                        {book.author.firstName} {book.author.lastName}
                    </Typography>
                    <Divider className="divider"/>
                    <Typography>
                        {book.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export { BookListCard };
