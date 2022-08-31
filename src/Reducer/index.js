
import {combineReducers} from "redux";

// import {product ,selectProduct,AddProduct} from "../Reducer/productData";
import {product} from "../Reducer/productReducer";
import {selectProduct} from "../Reducer/SelectProduct"
import AddToCartReducer from "./Addtocart";


const mainReducer = combineReducers({
    product:product,
    selectProduct:selectProduct,
    AddToCart : AddToCartReducer
})
export default mainReducer