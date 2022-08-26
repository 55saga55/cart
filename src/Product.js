
import React, { useEffect } from 'react';

import { useDispatch} from 'react-redux';

import { DisplayProductdata } from "./Action/index"

// import { Displaydata } from "./constant/index";

import axios from "axios"


export default function Product() {

    const myDispatch = useDispatch();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(y => {
                myDispatch(DisplayProductdata(y))
            }

            )
    })




    return (
        <div>Product</div>
    )
}






