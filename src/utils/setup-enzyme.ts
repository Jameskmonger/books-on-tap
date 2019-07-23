import 'jsdom-global/register';
import { configure as configureEnzyme } from "enzyme";

// exported using "export = " so importing with require instead :(
const Adapter = require("enzyme-adapter-react-16");

configureEnzyme({ adapter: new Adapter() });
