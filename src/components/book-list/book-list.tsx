import * as React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Book } from "../../models/book";

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
                books.map(b => (
                    <Grid item key={b.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );//<p>{books[0].id}</p>;
};

export { BookList };
