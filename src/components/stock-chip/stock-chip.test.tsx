import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect, TestCase } from "alsatian";

import Chip from "@material-ui/core/Chip";

import { StockChip } from "./stock-chip";
import { BookBuilder } from "../../models/book";
import { Loader } from "../loader/loader";

@TestFixture("<StockChip /> tests")
export class StockChipTests {
    @TestCase(1)
    @TestCase(2)
    @TestCase(50)
    @TestCase(100)
    public shouldRenderCorrectlyWhenInStock(stockAmount: number) {
        const wrapper = shallow(<StockChip stockAmount={stockAmount} />);

        Expect(wrapper.equals(<Chip label="In Stock" className="stock-chip in-stock" />)).toBe(true);
    }

    @Test()
    public shouldRenderCorrectlyWhenOutOfStock() {
        const wrapper = shallow(<StockChip stockAmount={0} />);

        Expect(wrapper.equals(<Chip label="Out of Stock" className="stock-chip" />)).toBe(true);
    }
}
