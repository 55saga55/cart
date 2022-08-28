
import React ,{useEffect} from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import axios from "axios";
// import { selectProduct } from "./Reducer/productData";

// import { Displaydata } from "./constant/index";
import {   SelectedProductdata } from "./Action/index"
import { useParams } from 'react-router-dom';



export default function Product() {

    const myDispatch = useDispatch();

  const{productId}= useParams()

    const data = useSelector(y =>y.selectProduct)
    console.log(data)
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
          .then(y => {
              myDispatch(SelectedProductdata(y.data))
          }
  
          )
  },[SelectedProductdata])

  const { image, title, price, category, description } = data

  // const { productId } = useParams();
  // let product = useSelector((state) => state.selectProduct.currentSelectItem);
  // console.log(product);
  // // const { image, title, price, category, description } = product;
  // const dispatch = useDispatch();
  // const fetchProductDetail = async (id) => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(SelectedProductdata(response.data));
  // };

  // useEffect(() => {
  //   if (productId && productId !== "")
  //   {
  //     fetchProductDetail(productId);
  //   } 
  //   // return () => {
  //   //   dispatch(removeSelectedProduct());
  //   // };
  // }, []);

  
    
    
 return (
        <div>
          
           
              <div>
              <h1>{title}</h1>
              </div>
                

                <h1>{price}</h1>
                <h1>{category}</h1>
                <h1>{description}</h1>
          
        </div>
    )
}






