import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './screenStyling.css';
import DataItem from "./DataItem";
import axios from "axios";

export default function About(){

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((success) => {setListData(success.data)}).catch((error) => {console.log(error)})
    },[]);

    const [listData, setListData] = useState([]);

    let [searched, setSearched] = useState([]);

    const navigate = useNavigate();
    const showItem = (item) => {
      navigate('/DataItem',{
        state : item 
      })
    }

    return(
        
        <>
 
            <h1 className="heading">All Products</h1>
            <div className="Parent">
           
            {

            listData.map((value, index) => {
            return (
              <div className='Card' key={index} onClick={() => showItem(value)}>
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