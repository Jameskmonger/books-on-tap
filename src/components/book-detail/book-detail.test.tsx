import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect } from "alsatian";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import { BookDetail } from "./book-detail";
import { BookBuilder } from "../../models/book";
import { Loader } from "../loader/loader";
import { StockChip } from "../stock-chip/stock-chip";

@TestFixture("<BookDetail /> tests")
export class BookDetailTests {
    @Test()
    public shouldRenderLoadingSpinnerWhenNotLoaded() {
        const wrapper = shallow(<BookDetail book={null} />);

        Expect(wrapper.equals(<Loader />)).toBe(true);
    }

    @Test()
    public shouldRenderCorrectlyForInStockBook() {
        const book = new BookBuilder().withStockAmount(5).build();

        const wrapper = shallow(<BookDetail book={book} />);

        const expected = (
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

                            <Grid item xs={12} sm>
                                <Button color="primary">Order Book</Button>
                            </Grid>
                        </Grid>

                        <Divider className="divider" />

                        <Typography>
                            {book.description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );

        Expect(wrapper.equals(expected)).toBe(true);
    }

    @Test()
    public shouldRenderCorrectlyForOutOfStockBook() {
        const book = new BookBuilder().withStockAmount(0).build();

        const wrapper = shallow(<BookDetail book={book} />);

        const expected = (
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
                        </Grid>

                        <Divider className="divider" />

                        <Typography>
                            {book.description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
