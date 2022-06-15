import React, { useState } from "react";
import './sign.css';
import axios from 'axios';
import { NavLink } from "react-router-dom";


function Registration (){
    const [Name, Namedata]= useState()
    const [email, emaildata]= useState()
    const [mobileNumber, mobileNumberdata]=useState()
    const [setPassword, setPassworddata]=useState() 

    const reg =()=>{
        console.log(Name)
        axios.post('http://192.168.29.174:8080/api/v1/user/signUP',{Name, email, mobileNumber, setPassword})
        .then((Response)=>{
            console.log(Response)
        }).catch((err)=>{
            console.log(err)
        })

        alert('SignUp successfull');

    // const log =()=>{
    //     axios.post('http://192.168.29.174:8080/api/v1/user/login',{Name, setPassword})
    //     .then((Response)=>{
    //         console.log(Response)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }     
         
    }
    return(
    <>
    <center>
    <form>
    <div className="con1">   
    <h3 className="h3">SignUp</h3> 
    <div className="cons">      
    <input className="put" type="text" placeholder="Name" name="Name" onChange={(text)=>Namedata(text.target.value)}/>
    <input className="put" type="text" placeholder="Email" name="email" onChange={(text)=>emaildata(text.target.value)}/>
    <input className="put" type="text" placeholder="Number" name="mobileNumber" onChange={(text)=>mobileNumberdata(text.target.value)}/>
    <input className="put" type="text" placeholder="Password" name="setPassword" onChange={(text)=>setPassworddata(text.target.value)}/><br></br><br></br>
    {/* <button className="btn" type="button" onClick={reg} class="sign">SignUp</button> */}
    <button className="btn3" onClick={reg} type="button">SignUp</button><br></br><br></br>
    {/* <button type="button" class="sign">SignUp</button> */}
    <h5>Already Register?</h5><p className="p2" onClick={()=> window.location.href = '/'}>Login</p>
    </div>
    </div>
    </form>
    </center>
    </>
    )

}

export default Registration;