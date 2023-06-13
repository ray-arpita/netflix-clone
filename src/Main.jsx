import React from 'react'
import App from './App'
import { Route , Routes} from 'react-router-dom'
import Movies from './components/Movies'
import Navbar from './components/Navbar'



const Main = () => {
  return (
    <>

        <Navbar/>
      {/* <button style={{marginLeft:"1050px" , marginBottom:"0px"}}>back</button> */}
    <div>

      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/movies/*' element={<Movies/>}/>
      </Routes>

    </div>
    {/* //* is used here for trailing */}
    </>
  )
}

export default Main
