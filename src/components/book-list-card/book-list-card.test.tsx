import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect } from "alsatian";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { BookListCard } from "./book-list-card";
import { BookBuilder } from "../../models/book";
import { Link } from "react-router-dom";

@TestFixture("<BookListCard /> tests")
export class BookListCardTests {
    @Test()
    public shouldRenderCorrectly() {
        const book = new BookBuilder().build();

        const wrapper = shallow(<BookListCard book={book} />);

        const expected = (
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
                        <Divider className="divider" />
                        <Typography>
                            {book.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/book/${book.id}`}>
                            <Button size="small" color="primary">
                                View
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        );

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
