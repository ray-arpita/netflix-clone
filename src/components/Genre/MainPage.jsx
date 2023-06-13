import axios from 'axios';
import React, { useEffect, useState } from 'react';






const MainPage = () => {
  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=60ed5cd8";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const responseData = response.data;

        setMovie(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error fetching movie:', error);
      });
  }, []);

  return (
<>

            <center>
        <div style={{color:"white"}} className="d-flex justify-content-around">
     <div className="img" style={{marginLeft:"70px"}}>

     <img src={movie.Poster} alt="Movie Poster" />
     </div>
    <div className="data" style={{marginTop:"30px"}}>

<h1 style={{color:'red'}}>Most Watched Movie</h1>
      <h2 style={{color:"white" , fontFamily:"cooper"}}>{movie.Title}</h2>
      <h4>{movie.Genre}</h4>
      <h4 style={{color:"grey"}}>{movie.Actors}</h4>
      <h5>Director : {movie.Director}</h5>
      <h5>Writer : {movie.Writer}</h5>
  
    <h5>{movie.imdbRating} ⭐️</h5>
    <h5 style={{textIndent: "50px"}}>{movie.Plot}</h5>
      </div>
    </div>
       </center> 



       </>
    
  );
};

export default MainPage;
