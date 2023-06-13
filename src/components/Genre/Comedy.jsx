import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Comedy = () => {
    const [comedy,setComedy] = useState([]);

useEffect(()=>{
    const ComedyUrl = "https://www.omdbapi.com/?s=comedy&apikey=60ed5cd8";
axios.get(ComedyUrl)
.then((response)=>{
    setComedy(response.data.Search)

}).catch(()=>{
  alert("failed")
}) 
},[])




  return (
    <div>
      

      <h1 style={{color:"white" , textAlign:"center" }}>Comedy</h1><br/>
    <div style={{color:"white" , display:"flex" , overflowX:"hidden" , margin:"10px" , overflowY:"hidden"}} className="container2">
      <hr/>
      {
        comedy.map((movie) => {
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

export default Comedy
