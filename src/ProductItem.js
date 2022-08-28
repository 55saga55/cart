import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { DisplayProductdata } from "./Action/index"
import { Link } from 'react-router-dom';


export default function ProductItem() {

  const myDispatch = useDispatch();

  const data = useSelector(y => y.product.items)
  console.log(data)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(y => {
        myDispatch(DisplayProductdata(y.data))
      }

      )
  }, [myDispatch])

  return (
    <div className=''>
      <div className='d-flex flex-wrap justify-content-around '>
        {
          data.map((x) => {

            return (


              <Link to={`/product/${x.id}`} className="text-decoration-none">
                <div class="product-card " key={x.title}>
                  <div class="badge">Hot</div>
                  <div class="product-tumb">
                    <img src={x.image} className="img-fluid" alt="" />
                  </div>
                  <div class="product-details">
                    <span class="product-catagory">{x.category}</span>
                    <h4><a href="/">{x.title}</a></h4>

                    <p>{x.description}</p>

                    <div class="product-bottom-details">
                      <div class="product-price">${x.price}</div>
                      <div class="product-links">
                        <a href="/"><i class="fa fa-heart"></i></a>
                        <a href="/"><i class="fa fa-shopping-cart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>


            )
          })
        }
      </div>
    </div>
  )
}
