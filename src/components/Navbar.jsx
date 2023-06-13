import React from 'react'
import style from './Navbar.module.css'



const Navbar = () => {

  const navigateHome = () => {
    window.location.href = '/'
    //navigate to home page
  }



  
  return (
    <>
    <div className= {style.header}>


        <h2 id={style.netflix} onClick={navigateHome}>NETFLIX</h2>
        <nav>
<select className={style.select}>
    <option value="english">English</option>
    <option value="hindi">Hindi</option>
</select>
<button>Sign In</button>

        </nav>
    </div>
    </>
  )
}

export default Navbar