import React from "react";
import { useState } from "react";
import axios from "axios";
import './cons.css'
import { Form, Button,  Checkbox, FormCheck } from "react-bootstrap";
import { FormCheckbox } from "semantic-ui-react";
import Datas from "../passingState/datas/datas";
import Datalist from "../passingState/datalist/datalist";
import 'bootstrap/dist/css/bootstrap.min.css';
const Detail =()=>{
    const [declareData, changeData]=useState('false')
    const [Name, NameData]=useState('');
    const [setPassword, setPasswordData]=useState('');
    // const [data, setData]=useState('');
    const changingData =()=>{
        changeData(200)
    }
    
    const login = async()=>{
    console.log("declareData", declareData);
    console.log("Name", Name)
    console.log("Password", setPassword)
    const datas = await axios.post('http://192.168.29.174:8080/api/v1/user/login',{Name, setPassword})
        localStorage.setItem('token', datas.data.userData.jwttoken)
        console.log('token', datas.data.userData.jwttoken)
        console.log('status', datas.status)
        changeData(datas.status)
        alert('Success')
        // return JSON.stringify(datas)
         // console.log(JSON.stringify(datas))
    
    }
    
    if( declareData == 200){
        return(
            <div>
                <Datalist/>
                {/* <Datas/> */}
            </div>
        )
    }else{
        return(
            <>
            <div className="bgc">
            <form className="fom">   
            <center>        
            <div className="con">   
            <h3 >Login</h3>
            <div className="cons">   
            <input className="put" type="text" placeholder="Username" name="Name" onChange={(text)=>NameData(text.target.value)} /><br></br><br></br>
            <input className="put" type="password" placeholder="Password" name="setPassword" onChange={(text)=>setPasswordData(text.target.value)} /><br></br><br></br>
            <FormCheckbox label="I agree"></FormCheckbox><br></br>
            <button className="btn3" onClick={login} type="button">Login</button><br></br><br></br>
            <h5>New User?</h5><p className="p1" onClick={()=> window.location.href = '/signUp'}>SignUp</p>
            </div>
            </div>
            </center>
            </form>
            </div>
            </>

        )
    }
//    return(
    
//     declareData == 'true' ?  <h2>Login Success</h2> : <button onClick={changingData}>Submit</button> 
//    )

}



export default Detail;