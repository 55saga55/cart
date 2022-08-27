
import {combineReducers} from "redux";

import {product ,selectProduct} from "../Reducer/productData";


const mainReducer = combineReducers({
    product:product,
    selectProduct:selectProduct
})
export default mainReducer