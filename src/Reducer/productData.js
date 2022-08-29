import { AddToCart, Displaydata , SelectedProduct } from "../constant"
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


export const AddProduct = (state = initialState , {type, payload}) =>{

  switch (type) {

    case AddToCart:
  
       let myCart =  [...state.cart];
  
      if(myCart.length === 0)
      {
          myCart.push({...payload, count :1});
      }
      else
      {
        var checkProductExist =  myCart.filter((data,index)=> {
  
          return data.id == payload.id;
        })
          if(checkProductExist.length > 0)
          {
              var myArray = myCart.map((elemment)=>{
  
                if(elemment.id == payload.id)
                {
                  return {...elemment, count : elemment.count + 1 }
                }
                else
                {
                  return elemment;
                }
  
              });
  
              return {...state, cart : myArray};
  
          }
          else
          {
            myCart.push({...payload, count :1});
  
          }
  
      }
  
      return {...state, cart : myCart };
  
  
    
    default:
      return state
    }
}