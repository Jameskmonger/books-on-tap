import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect, AsyncTest } from "alsatian";


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { BookListCard } from "./book-list-card";
import { BookBuilder } from "../../models/book";

@TestFixture("<BookListCard /> tests")
export class BookListCardTests {
    @Test()
    public shouldRenderCorrectly() {
        const book = new BookBuilder().build();

        const wrapper = shallow(<BookListCard book={book} />);

        const expected = (
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        image={book.thumbnail}
                        title={book.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
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

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
