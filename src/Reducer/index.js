
import {combineReducers} from "redux";

import product from "../Reducer/productData";

const mainReducer = combineReducers({
    product:product
})
export default mainReducer