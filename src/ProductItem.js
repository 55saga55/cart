import React ,{useEffect} from 'react';
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
},[myDispatch])

  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
      {
        data.map((x) => {

          return (
            // <div class="row row-cols-1 row-cols-md-3 g-4 ">
           
              <div className="col col-md-3 d-flex my-5 mx-2" key={x.title} >
                
                <div className="card h-100">
                  <img src={x.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.id}</h5>
                    <Link to = {`/product/${x.id}`} className="d-flex">
                    <p className="card-text">{x.description}</p>
                    </Link>
                  </div>
                </div>
              </div>
              
              
              )
        })
      }
            </div>
          )
        }
