import React from "react";
import { useState } from "react";
import axios from "axios";
import Products from "./products";
import './cat.css';
import { NavLink, Navigate, useNavigate } from "react-router-dom";


const Category = ()=>{
    const navigate =useNavigate();
    const [category, categoryData]=useState();

    const categoryDetail = async()=>{
       const result = await axios.get('http://localhost:8080/api/v2/watch/getCategory',
       {headers:{"token":localStorage.getItem('token') }})
       console.log(result)
       categoryData(result)
    }


    if(category){
        return(
            <div>

<div className="colors">
    <nav className="navba">
    <h4 className="fon1">&#518;xplore Now</h4>
        <ul>
        <li onClick={()=> window.location.href ='#'}>Order</li>
        <li onClick={()=> window.location.href ='#'}>Cart</li>
        {/* <li onClick={()=> window.location.href ='/signUp'}>Profile</li> */}
        <li onClick={()=> window.location.href ='/category'}>Product</li>
        <li onClick={()=> window.location.href ='/home'}>Home</li>
        </ul>
        <form className="fom2">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="button">&#128269;</button>
        </form>
        </nav>
        </div>
 


    <div className="grid-con">
    {
        category.data.result.map((detail, indexs)=>{
        console.log("data")
        console.log("data", detail.categoryName)
        return(
                <div key={indexs} onClick={()=>navigate('/product', {state:detail})}>
                    <img src={detail.image} width="300" height="300"/>
                    <p>{detail.categoryName}</p>
                    {/* <p>{detail.ageRestriction}</p> */}
                    {/* <p>{detail.useruuid}</p> */}
                </div>
                )
                })
    }
        </div>
        </div>
        )
        
    }else{
        return(
        <>
        <div>
            
            <button onClick={categoryDetail} type="button">Category</button>
            
        </div>
        </>
    )
  }
}


export default Category;