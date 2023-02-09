//Root reducer (Đây là nơi chứa reducer chính)
import { combineReducers } from "redux";

import orderReducer from "./order.reducer.js";

const rootReducers = combineReducers({
    orderReducer
});

export default rootReducers