import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Action from './Genre/Action'
import Horror from './Genre/Horror'
import Comedy from './Genre/Comedy'
import DefaultPage from './Genre/DefaultPage'

const Page = () => {
  return (
    <div style={{ width:"1020px"}}>
 
      <Routes>
      <Route path="/movies/*" />
      <Route path = "/" element= {<DefaultPage/>}/>
    <Route path = "/action" element= {<Action/>}/>
    <Route path = "/horror" element= {<Horror/>}/>
    <Route path = "/comedy" element= {<Comedy/>}/>
      </Routes>



    </div>
  )
}

export default Page
