import React from 'react'

// import Navbar from './Navbar';
import SideBar from './SideBar';
// import Page from './Page';
//.....
import { Routes , Route} from 'react-router-dom'
import Action from './Genre/Action'
import Horror from './Genre/Horror'
import Comedy from './Genre/Comedy'
import DefaultPage from './Genre/DefaultPage'
import MainPage from './Genre/MainPage'




const Movies = () => {

  return (
    <>
    {/* <Navbar/>
      <button onClick={goToBack} style={{marginLeft:"1050px" , marginBottom:"0px"}}>back</button> */}

    <div  style={{display:"flex" ,  padding : "0px" }}>
    <div>
    <SideBar/>

    </div>
    <div style={{marginLeft:"230px", marginTop:"30px" }}>
    
      <Routes>
      <Route path="/" element= {<DefaultPage/>} />
    <Route path = "movies/action" element= {<Action/>}/>
    <Route path = "movies/horror" element= {<Horror/>}/>
    <Route path = "movies/comedy" element= {<Comedy/>}/>
    <Route path = "movies/others" element= {<MainPage/>}/>
      </Routes>

      </div>
      </div>

    </>
  )
}

export default Movies
