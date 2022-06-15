import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Samp from './components/sampleCom/sam-1/sam-1';
import SignUp from './components/pages/signUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/pages/navbar';
import Login from './components/pages/login';
import Home from './components/pages/home';
import Product from './components/pages/products';
import Category from './components/pages/category';
// import Logout from './components/registration/signUp/logout';

function App() {

  // const[loginStatus, setLoginStatus]=useState("false");
  // useEffect(()=>{
  //   console.log("loginStatus", loginStatus)
  //   let data =localStorage.getItem("loginStatus")
  //   setLoginStatus(data)
  // },[])
  return (
    <div className="App">
      {/* <Samp data = 'bala'/>  */}
      <Router>
      {/* {console.log("Status", localStorage.getItem("loginStatus"))}
      {
      loginStatus == "false" ? <Login1 setLoginStatus={setLoginStatus} /> :  <Nav/>
      }  */}
        {/* <Nav/>  */}
       <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/product' element ={<Product/>}/>
          <Route path='/category' element={<Category/>}/>
          {/* <Route path='/logout' element={<Logout/>}/> */}
         </Routes>
      </Router>
      {/* <Route path='/login' element ={<Login1/>}/> */}
       {/* <Conditional/>  */}
    </div>
  );
}

export default App;
