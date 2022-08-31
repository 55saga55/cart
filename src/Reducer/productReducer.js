
import { AddToCart, Displaydata , SelectedProduct } from "../constant"
// import DisplayProductdata from "../Action/index"


const initialState = {
    items : [],
   
}
export const product = (state = initialState, { type, payload }) => {
    switch (type) {
  
    case Displaydata:
      return { ...state, items: payload }
      
      
    default:
      return state
    }
  }
  