import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect, AsyncTest } from "alsatian";
import { BookList } from "./book-list";
import { BookBuilder } from "../../models/book";

@TestFixture("<BookList /> tests")
export class BookListTests {
    @Test()
    public shouldRenderLoadingSpinnerWhenNotLoaded() {
        const wrapper = shallow(<BookList books={null} />);

        Expect(wrapper.equals(<p>Loading books...</p>)).toBe(true);
    }

    @AsyncTest()
    public async shouldRenderBooks() {
        const books = [ new BookBuilder().build() ];
        const wrapper = shallow(<BookList books={books} />);

        Expect(wrapper.equals(<p>{books[0].id}</p>)).toBe(true);
    }
}
