import React  from "react";
import '../login/log.css';

function Logout(){
    const logout =()=>{
        localStorage.setItem("loginStatus", false)
        window.location.href ='/home'
    }

    return(
        <>
        <center>
        <div className="box3">
        <h3 className="h3">Login</h3>
        <button type="button" onClick={logout} class="sign">Logout</button> 
        </div>
        </center>
        </>
    )
}

export default Logout;