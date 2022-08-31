
import { SelectedProduct } from "../constant"
// import DisplayProductdata from "../Action/index"


// const initialState = {
//     items : [],
//     cart : [],
//     currentSelectItem : []
// }

export const selectProduct = (state = {}, { type, payload }) => {
    switch (type) {
  
    case SelectedProduct:
      return { ...state, ...payload }
  
    default:
      return state
    }
  }
  