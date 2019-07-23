import "../../utils/setup-enzyme";
import * as React from "react";
import { shallow } from "enzyme";

import { TestFixture, Test, Expect } from "alsatian";

import CircularProgress from '@material-ui/core/CircularProgress';

import { Loader } from "./loader";

@TestFixture("<Loader /> tests")
export class LoaderTests {
    @Test()
    public shouldRenderCorrectly() {
        const wrapper = shallow(<Loader />);

        const expected = (
            <div className="loader">
                <CircularProgress />
            </div>
        );

        Expect(wrapper.equals(expected)).toBe(true);
    }
}
