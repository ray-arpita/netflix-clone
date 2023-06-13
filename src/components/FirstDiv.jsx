import React, { useState , useEffect } from 'react'
import stylesheet from './FirstDiv.module.css'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

// import jsonData from "../components/Data.json"




const FirstDiv = () => {


  useEffect(() => {
    $(document).ready(function () {
      $(`#netflix`).hide(2000,function(){
        $(`#netflix`).show(3000).css("color","white").text("NETFLIX AND CHILL!").css("backgroundColor","black");
      })})})
  

const [input,setInput] = useState("Email address");
console.log(input)

const navigate = useNavigate();




  return (


    
    <>
      <div>

     <center>

{/* <video src={Video} autoPlay loop height={"500px"} /> */}
    <div className={stylesheet.main}>
 
    <h1 id = "netflix" style={{color:"red" , fontFamily:"cooper" , backgroundColor:"black"}}>W E E K E N D?</h1> 
<input type="text" value={input}
style={{
    width:"200px",
    height:"40px",
    border:"1px solid grey",
    borderRadius:"5px",
    padding:"10px",
    backgroundColor:"black",
    backgroundImage:{},
    color:"white",
    margin:"10px",
    marginTop:"180px"
}}

onChange={(e)=>{setInput(e.target.value)}}


/>

<button style={{width:"100px" , height : "40px"}} 
//not working
onClick={() => {if (input.length>0) {navigate('/movies')}}}
>Get started</button>

    </div>
    <hr style={{border:"4px solid grey" , marginTop:"1px"}}/>
  
    </center>

    </div>
    </>
  )
}

export default FirstDiv;
