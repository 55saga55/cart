
import React, { useEffect } from 'react';

import { useDispatch} from 'react-redux';

import { DisplayProductdata } from "./Action/index"

import { product } from "./Reducer/productData";

// import { Displaydata } from "./constant/index";

import axios from "axios"


export default function Product() {

    const myDispatch = useDispatch();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(y => {
                myDispatch(DisplayProductdata(y.data))
            }

            )
    })
    
// console.log(DisplayProductdata.type);
// console.log(myDispatch)



    return (
        <div>{
        //    data?.map((x)=>{
        //         return (
        //             <div>{x.item}</div>
        //         )
        //     })
            }</div>
    )
}






