import React from "react";
import { useState } from "react";
import  axios  from "axios";
import { NavLink } from "react-router-dom";
import '../login/log.css';

function Log({setLoginStatus}){
    const [Name, Namedata]= useState()
    const [setPassword, setPassworddata]=useState()
 
    const login = ()=>{
    localStorage.setItem("loginStatus", true)
    console.log("loginStatus", localStorage.getItem("loginStatus"))
    let status = localStorage.getItem("loginStatus")
    setLoginStatus(status)

    }

    
    const log =()=>{
        console.log("log")
        axios.post('http://192.168.29.174:8080/api/v1/user/login',{Name, setPassword})
        .then((Response)=>{
            console.log("axios")
            localStorage.setItem("loginStatus", Response.data.userData.loginStatus)
            let status = localStorage.getItem("loginStatus")
            setLoginStatus(status)
            console.log(Response.data)
        }).catch((error)=>{
            console.log(error)
        })
    } 

    return(
        <>
        <center>
        <form>
        <div className="box">   
        <h3 className="h3">Login</h3>       
        <input type="text" placeholder="Username" name="Name" onChange={(text)=>Namedata(text.target.value)}/>
        <input type="text" placeholder="Password" name="setPassword" onChange={(text)=>setPassworddata(text.target.value)}/>
        <button type="button" onClick={log} class="sign">Login</button>
        <h3>New User</h3><NavLink to='/signup'>SignUp</NavLink>
        </div>
        </form>
        </center>
        </>
    )

}


export default Log;