import React from 'react'
import { Link } from 'react-router-dom'
import style2 from "./Sidebar.module.css"

const SideBar = () => {
  return (
    <div>
          <div className={style2.sidebar2}>

      <ul>

    <li >
      <Link to="movies/action" >
   Action
      </Link>
      <br />

    </li>
    <li>
      <Link to="movies/horror" >
 Horror
      </Link>
      <br />
    </li>
    <li >
      <Link to="movies/comedy" >
Comedy
      </Link>
      <br />
    </li>
    <li >
      <Link to="movies/others" >
Others
      </Link>
      <br />
    </li>
  </ul>
      </div>
    </div>
  )
}

export default SideBar
