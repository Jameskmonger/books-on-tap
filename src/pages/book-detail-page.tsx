import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Book } from "../models/book";
import { BookDetail } from "../components/book-detail/book-detail";

interface BookDetailPageProps {
    id: string;
    getBook: (id: string) => Promise<Book>;
}

// not possible to have useEffect work with shallow-rendering for the tests
// so this is sadly not tested - but has been made into a super-thin layer
// passing data into the (tested) BookList component

const BookDetailPage: React.FunctionComponent<BookDetailPageProps> = ({ id, getBook }) => {
    const [book, setBook] = React.useState<Book>(null);

    React.useEffect(() => {
        const get = async () => {
            const books = await getBook(id);

            setBook(books);
        };

        get();
    }, [id, getBook]);

    return (
        <>
            <Typography className="home-link">
                <Link to="/">{"<-"} Return to book list</Link>
            </Typography>

            <BookDetail book={book} />
        </>
    );
};

export { BookDetailPage };
