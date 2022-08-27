
import React ,{useEffect} from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { selectProduct } from "./Reducer/productData";

// import { Displaydata } from "./constant/index";
import {   SelectedProductdata } from "./Action/index"
import { useParams } from 'react-router-dom';



export default function Product() {

    const myDispatch = useDispatch();
  const{productId}= useParams()

    const data = useSelector(y => y.selectProduct)
    console.log(data)
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
          .then(y => {
              myDispatch(SelectedProductdata(y.data))
          }
  
          )
  })

  
    
    
 return (
        <div></div>
    )
}






