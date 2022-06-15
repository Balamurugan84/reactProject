import React, { useState } from "react";

const Hookdata = ()=>{
    const[declareData, changeFunction]= useState("test data");
    const changingFunction =()=>{
        changeFunction("hook test");
    }
    return(
        <>
        <h1>Test hook {declareData}</h1>
        <button onClick={changingFunction}> Click</button>
        </>
    )
}

export default Hookdata