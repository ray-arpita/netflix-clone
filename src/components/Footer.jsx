import React from 'react'

const Footer = () => {

const scrollTo = () => {
    window.scrollTo({
        top: 5,
        left: 0,
        behavior: "smooth"
    })
}


  return (
<>
<div className="container" style={{color:"white" , textDecoration:"underline" }}>

<hr style={{border : "4px solid grey"}}/>
    <p style={{margin:"50px"}}>Questions? Call 000-800-919-1694</p>
    <table style={{margin:"50px"}}>
        <thead>
        <tr >
            <td onClick={scrollTo}>FAQ</td>
            <td>Help Centre</td>
            <td>Account</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Media Centre</td>
            <td>
Investor Relations</td>
            <td>
Jobs</td>
        </tr>

        <tr>
            <td>Ways to Watch</td>
            <td>
Terms of Use</td>
            <td>
Privacy
</td>
        </tr>
        <tr>
            <td>Cookie Preferences</td>
            <td>
Corporate Information</td>
            <td>
Contact Us</td>
        </tr>
        <tr>
            <td>Speed Test</td>
            <td>
Legal Notices</td>
            <td>
Only on Netflix</td>
        </tr>
        </tbody>
    </table>

</div>
</>
  )
}

export default Footer
