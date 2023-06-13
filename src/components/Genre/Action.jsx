import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Action = () => {
    const [action,setAction] = useState([]);

useEffect(()=>{
    const ActionUrl = "https://www.omdbapi.com/?s=action&apikey=60ed5cd8";
axios.get(ActionUrl)
.then((response)=>{
    setAction(response.data.Search)

}).catch(()=>{
  alert("failed")
}) 
},[])




  return (
    <div>
      

      <h1 style={{color:"white" , textAlign:"center" }}>Action</h1><br/>
    <div style={{color:"white" , display:"flex" , overflowX:"hidden" , margin:"10px" , overflowY:"hidden" }} className="container2">
      <hr/>
      {
        action.map((movie) => {
          return (
            < >
<div>
 <img src={movie.Poster} alt="Fail to load" style={{width:"300px" , height:"300px" , margin:"10px"}}/>
 <h5>{movie.Title}</h5>
 <p style={{color:"grey"}}>{movie.Year}</p>

 </div>

              </>
          )

        }
        )
      }

    </div>
      
    </div>
  )
}

export default Action
