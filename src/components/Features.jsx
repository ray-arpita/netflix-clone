import React from 'react'
import Style2 from './Features.module.css'



const Features = ({text,text2,Img}) => {
  return (
    <>
    <div className={Style2.container}>
        <div className={Style2.header}>
            <h2>{text}</h2>
            <h3>{text2}</h3>
        </div>
        <div className={Style2.img}>
      <img src={Img} alt="failed" className={Style2.photo}/>

    </div>

    </div>
        <hr style={{border:"4px solid grey" }}/>
        </>
  )
}

export default Features
