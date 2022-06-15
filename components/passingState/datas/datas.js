import React from "react";
import { useState } from "react";
import axios from "axios";

const Datas = ()=>{
    
    const [category, categoryData]=useState();

    const categoryDetail = async()=>{
       const result = await axios.get('http://localhost:8080/api/v2/watch/getCategory',
       {headers:{"token":localStorage.getItem('token') }})
       console.log(result)
       categoryData(result)
    }

    return(
        <div>
            <button onClick={categoryDetail} type="button">Category</button>
        </div>
    )
}

export default Datas;