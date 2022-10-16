import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Product() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((success) => {setData(success.data)}).catch((error) => {console.log(error)})
    },[]);
    
  return (
    <>
      {/* <div>Product</div> */}
    
    <div className="Parent">
           
           
            {

            data.map((value, index) => {
            return (
              <div className='Card' key={index}>
                <img src={value.image} alt="" width="100%" height="300px" />
                <div className='price'>Rs. {value.price}</div>
                <div className='title'>{value.title}</div>
              </div>
            )
          })
        }
            </div>
    </>

  )
}
