import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect } from "alsatian";

import Grid from "@material-ui/core/Grid";

import { BookList } from "./book-list";
import { BookBuilder } from "../../models/book";
import { BookListCard } from "../book-list-card/book-list-card";
import { Loader } from "../loader/loader";

@TestFixture("<BookList /> tests")
export class BookListTests {
    @Test()
    public shouldRenderLoadingSpinnerWhenNotLoaded() {
        const wrapper = shallow(<BookList books={null} />);

        Expect(wrapper.equals(<Loader />)).toBe(true);
    }

    @Test()
    public shouldRenderBooks() {
        const books = [
            new BookBuilder()
                .withId("00000000-0000-0000-0000-000000001234")
                .withTitle("Game Engine Architecture")
                .build(),

            new BookBuilder()
                .withId("00000000-0000-0000-0000-000000005678")
                .withTitle("Complete Guide to the Modern Car")
                .build()
        ];

        const wrapper = shallow(<BookList books={books} />);

        const expected = (
            <Grid container spacing={2}>
                <BookListCard key={books[0].id} book={books[0]} />
                <BookListCard key={books[1].id} book={books[1]} />
            </Grid>
        )

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
