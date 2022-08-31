import { AddToCart, Displaydata , SelectedProduct } from "../constant"
// import DisplayProductdata from "../Action/index"


const initialState = {
   
    cart : []
   
}
 const AddToCartReducer = (state = initialState , {type, payload}) =>{

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

  export default AddToCartReducer;