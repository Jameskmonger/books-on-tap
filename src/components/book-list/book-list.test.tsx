import "../../utils/setup-enzyme";
import * as React from "react";
import { mount } from "enzyme";

import { TestFixture, Test, Expect, AsyncTest } from "alsatian";
import { BookList } from "./book-list";
import { Book, BookBuilder } from "../../models/book";
import { waitForExecutionQueue } from "../../utils/wait-for-execution-queue";

// These tests need to use `mount` over `shallow` as `useEffect` isn't called inside `shallow` renders yet

@TestFixture("<BookList /> tests")
export class BookListTests {
    @Test()
    public shouldRenderLoadingSpinnerWhenNotLoaded() {
        // create a promise that doesn't resolve
        const getBooks = () => new Promise<Book[]>((resolve, reject) => {
            // do nothing
        });
        const wrapper = mount(<BookList getBooks={getBooks} />);

        Expect(wrapper.html()).toBe("<p>Loading books...</p>");
    }

    @AsyncTest()
    public async shouldRenderBooks() {
        const books = [ new BookBuilder().build() ];

        const getBooks = () => Promise.resolve(books);
        const wrapper = mount(<BookList getBooks={getBooks} />);

        await waitForExecutionQueue();

        Expect(wrapper.html()).toBe(`<p>${books[0].id}</p>`);
    }
}
