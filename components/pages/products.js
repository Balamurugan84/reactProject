import React from "react";
import { useState } from "react";
import axios from "axios";
import './product.css'
import Category from "./category";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Products =()=>{
    const{state} = useLocation();  
    console.log("state",state.uuid) 
    const [product, setProduct]=useState('');

    
    const productDetails = async()=>{
       const result = await axios.get('http://localhost:8080/api/v2/watch/getAllproduct',
       {headers:{"token":localStorage.getItem('token') }})
       setProduct(result)
    }

      const productDetail = async()=>{
       const result = await axios.get('http://localhost:8080/api/v2/watch/getCatproduct',
       {params:{"cat":state.uuid}})
       setProduct(result)
    }

    const indData = async(data)=>{
        console.log("Product_id", data)
        const datas = await axios.get(`http://localhost:8080/api/v2/watch/getOneProduct?uuid=${data}`)
        console.log("product", datas)
        // console.log("product", JSON.stringify(datas.data))
    }

    

    const updateData = async()=>{
        console.log(updateData)
        const detail = await axios.put('http://localhost:8080/api/v2/watch/updateProduct')
    }

    const deleteData = async(data)=>{
        // console.log(deleteData)
        const delData = await axios.delete(`http://localhost:8080/api/v2/watch/deleteProduct?watchBrand=${data}`).then((delData)=>{
            console.log("deleted", delData)
            productDetails()
        }).catch(error=>{
            console.log("error", error)
        })
        
    }

    
    
    console.log(product)

    if(product){
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
                     <input className="in" type="text" placeholder="Search.." name="search"/>
                     <button className="btn2">&#128269;</button>
                </form>
            </nav>
            </div>
 


                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Warranty</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.data.result.map((data, index)=>{
                                console.log("data")
                                console.log("data", data.watchBrand)
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.watchBrand}</td>
                                        <td>{data.price}</td>
                                        <td>{data.warranty}</td>
                                        <td><button onClick={()=>indData(data.uuid)} type="button">view</button></td>
                                        <td><button onClick={updateData} type="button">update</button></td>
                                        <td><button onClick={()=>deleteData(data.watchBrand)} type="button">delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        )
    }else{
        return(
        <>
        <div>
            {/* <Category/> */}
            <button onClick={productDetail} type="button">Products</button><br></br>
            <button onClick={productDetails} type="button">All Products</button>
            
        </div>
        </>
    )
  }
}

export default Products;
