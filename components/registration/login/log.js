import React, { useState } from "react";
import './log.css';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';

function Loginpage (){
    const navigate = useNavigate()
    const [Name, Namedata]= useState()
    const [setPassword, setPassworddata]=useState() 

    const reg =()=>{
        console.log(Name)
        axios.post('http://192.168.29.174:8080/api/v1/user/login',{Name, setPassword})
        .then((Response)=>{
            console.log(Response)
        }).catch((err)=>{
            console.log(err)
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
    {/* <center><button type="button" onClick={reg} class="sign">Login</button></center> */}
    <center><button type="button" class="sign">Login</button></center>
    <h3>New User</h3><NavLink to='/signup'>SignUp</NavLink>
    </div>
    </form>
    </center>
    </>
    )

}

export default Loginpage;