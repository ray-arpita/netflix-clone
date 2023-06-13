import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Horror = () => {
    const [horror,setHorror] = useState([]);

useEffect(()=>{
    const horrorUrl = "https://www.omdbapi.com/?s=horror&apikey=60ed5cd8";
axios.get(horrorUrl)
.then((response)=>{
  setHorror(response.data.Search)

}).catch(()=>{
  alert("failed")
}) 
},[])




  return (
    
    <div>
      

    <div style={{color:"white" , display:"flex" , overflow:"hidden" , margin:"10px" , overflowY:"hidden"}} className="container2">
      <hr/>
      {
        horror.map((movie) => {
          return (
            < >
<div>
 <img src={movie.Poster} alt="Fail to load" style={{width:"300px" , height:"300px" , marginTop:"70px"}}/><br/><br/>
 <h5 style={{color:"red"}}>{movie.Title}</h5>
 <p>{movie.Year}</p>

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

export default Horror
