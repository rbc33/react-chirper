import logger from "./logger";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

// const middleware = applyMiddleware(thunk, logger);

const middleware = [thunk, logger];
export default middleware;
