import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from "react";

const HomePage =()=>{

    const [search, setSearch]= useState('');
    const [searchData, setSearchdata] = useState('');
      
    const searchProduct = async()=>{
        try{
            console.log("search", search);
            const detail = await axios.get(`http://localhost:8080/api/v2/watch/search?watchBrand=${search}`)
            console.log("search", detail.data)
            setSearchdata(detail)
        }catch(err){
            console.log("err",err.message);
        }
    }
    
    if(searchData){
    return(
        <>
        <div className="colors">
            <nav className="navbar">
            <h4 className="fon1">&#518;xplore Now</h4>
                <ul>
                    <li onClick={()=> window.location.href ='#'}>About</li>
                    <div className="drop1">
                    <li className="drop2" onClick={()=> window.location.href ='/signUp'}>Profile</li>
                    <div className="drop3">
                       <p onClick={()=> window.location.href ='/signUp'}>SignUp</p>
                       <p onClick={()=> window.location.href ='/'}>Login</p>
                       <p onClick={()=> window.location.href ='/logout'}>Logout</p> 
                    </div>
                    </div>
                    {/* <li onClick={()=> window.location.href ='/product'}>Product</li> */}
                    <li onClick={()=> window.location.href ='/category'}>Product</li>
                    <li onClick={()=> window.location.href ='#'}>Home</li>
                </ul>
                <form>
                    <input  type="text" placeholder="Search.." name="search" onChange={(text)=>setSearch(text.target.value)}/>
                    <button type="button" onClick={searchProduct}>&#128269;</button>
                </form>
            </nav>
            
        </div>

        <div className="grid-con">
            
    {
        searchData.data.result.map((data, index)=>{
            console.log("data", data.watchBrand)
            return(
                <>
                <p>{data.watchBrand}</p>
                <p>{data.price}</p>
                <p>{data.warranty}</p>
                </>
            )
        })
    }
        </div>
        <div className="last">

        </div>
        </>
    )}else{
        return(
        <>
        <div className="colors">
            <nav className="navbar">
            <h4 className="fon1">&#518;xplore Now</h4>
                <ul>
                    <li onClick={()=> window.location.href ='#'}>About</li>
                    <div className="drop1">
                    <li className="drop2" onClick={()=> window.location.href ='/signUp'}>Profile</li>
                    <div className="drop3">
                       <p onClick={()=> window.location.href ='/signUp'}>SignUp</p>
                       <p onClick={()=> window.location.href ='/'}>Login</p>
                       <p onClick={()=> window.location.href ='/logout'}>Logout</p> 
                    </div>
                    </div>
                    {/* <li onClick={()=> window.location.href ='/product'}>Product</li> */}
                    <li onClick={()=> window.location.href ='/category'}>Product</li>
                    <li onClick={()=> window.location.href ='#'}>Home</li>
                </ul>
                <form>
                    <input type="text" placeholder="Search.." name="search" onChange={(text)=>setSearch(text.target.value)}/>
                    <button type="button" onClick={searchProduct}>&#128269;</button>
                </form>
            </nav>
        </div><br></br>
        <div className="img">
            {/* <img src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg" width="200px" height="200px"/> */}
            {/* <h6>Shop Now</h6> */}
            <img className="img1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" width="100%"/>
        </div>
        <div>

        </div>
        <div className="last">

        </div>
        </>
    )}
}

export default HomePage;