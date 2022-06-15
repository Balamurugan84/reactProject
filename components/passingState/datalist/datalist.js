import React from "react";
// import './datalist.css';

const Datalist =()=>{
      
    return(
        <>
        <div className="colors">
            <nav className="navba">
            <h4 className="fon1">&#518;xplore Now</h4>
                <ul>
                    <li onClick={()=> window.location.href ='/'}>About</li>
                    <div className="drop1">
                    <li className="drop2" onClick={()=> window.location.href ='/signUp'}>Profile</li>
                    <div className="drop3">
                       <p onClick={()=> window.location.href ='/signUp'}>SignUp</p>
                       <p onClick={()=> window.location.href ='/'}>Login</p>
                       <p onClick={()=> window.location.href ='/logout'}>Logout</p> 
                    </div>
                    </div>
                    <li onClick={()=> window.location.href ='/product'}>Product</li>
                    <li onClick={()=> window.location.href ='#'}>Home</li>
                </ul>
                <form className="fom2">
                    <input className="in" type="text" placeholder="Search.."/>
                    <button className="btn2">&#128269;</button>
                </form>
            </nav>
            
        </div>
        <div className="last">

        </div>
        </>
    )
}

export default Datalist;