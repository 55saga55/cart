import React from 'react';
import { useSelector } from 'react-redux'



export default function ProductItem() {

  const data = useSelector(y => y.product.items)
  console.log(data)

  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
      {
        data.map((x) => {
          return (
            // <div class="row row-cols-1 row-cols-md-3 g-4 ">
              <div class="col col-md-3 d-flex my-5 mx-2" >
                <div class="card h-100">
                  <img src={x.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{x.id}</h5>
                    <p class="card-text">{x.description}</p>
                  </div>
                </div>
              </div>
              // </div>
              )
        })
      }
            </div>
          )
        }
