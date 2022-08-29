
import {combineReducers} from "redux";

import {product ,selectProduct,AddProduct} from "../Reducer/productData";


const mainReducer = combineReducers({
    product:product,
    selectProduct:selectProduct,
    AddProduct : AddProduct
})
export default mainReducer