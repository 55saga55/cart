import { Displaydata } from "../constant/index"
import { SelectedProduct } from "../constant/index"
import { AddToCart } from "../constant/index"

export const DisplayProductdata = (payload) => ({
  type: Displaydata,
  payload
})
export const SelectedProductdata = (payload) => ({
  type: SelectedProduct,
  payload
})
export const AddToCartData = (payload) => ({
  type: AddToCart,
  payload
})
