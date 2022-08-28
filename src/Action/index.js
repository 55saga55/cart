import { Displaydata } from "../constant/index"
import { SelectedProduct } from "../constant/index"

export const DisplayProductdata = (payload) => ({
  type: Displaydata,
  payload
})
export const SelectedProductdata = (payload) => ({
  type: SelectedProduct,
  payload
})