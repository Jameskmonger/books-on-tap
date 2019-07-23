import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect } from "alsatian";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { BookDetail } from "./book-detail";
import { BookBuilder } from "../../models/book";
import { BookListCard } from "../book-list-card/book-list-card";
import { Loader } from "../loader/loader";

@TestFixture("<BookDetail /> tests")
export class BookDetailTests {
    @Test()
    public shouldRenderCorrectly() {
        const book = new BookBuilder().build();

        const wrapper = shallow(<BookDetail book={book} />);

        const expected = (
            <Container>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                </Typography>
            </Container>
        )

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
