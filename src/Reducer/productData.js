import { Displaydata , SelectedProduct } from "../constant"
// import DisplayProductdata from "../Action/index"


const initialState = {
    items : [],
    cart : [],
    currentSelectItem : []
}

export const product = (state = initialState, { type, payload }) => {
  switch (type) {

  case Displaydata:
    return { ...state, items: payload }
    
    // case AddtoCart:

    //     let myobj = [];
      
    //     if(state.cart.length === 0)
    //     {
      
    //       myobj.push(payload);
    //     }
    //     // else
    //     // {
    //     //   state.cart
      
    //     // }
      
    //     return {...state, currentSelectItem: payload}

  default:
    return state
  }
}

// const initialState = {}

export const selectProduct = (state = {}, { type, payload }) => {
  switch (type) {

  case SelectedProduct:
    return { ...state, ...payload }

  default:
    return state
  }
}


// export default product;
// export default selectProduct;