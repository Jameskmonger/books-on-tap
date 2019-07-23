import * as React from "react";
import { Book } from "../../models/book";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Loader } from "../loader/loader";

interface BookDetailProps {
    book: Book;
}

const BookDetail: React.FunctionComponent<BookDetailProps> = ({ book }) => {
    if (book === null) {
        return <Loader />;
    }

    return (
        <Container>
            <Typography gutterBottom variant="h5" component="h2">
                {book.title}
            </Typography>
        </Container>
    );
};

export { BookDetail };
