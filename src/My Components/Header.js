import React from 'react'

function Header(props) {
  return (
    <div className='footer-margin'>
       <nav className="navbar navbar-dark bg-black fixed-top mrgntop">
    <div className="container-fluid">
        <a className="navbar-brand fw " href="# " style={{fontWeight:'bold'}}><b>{props.title}</b></a>
        <a href="https://forms.gle/ZW3JLKp13zVPcGd49"><button className="bg-black " class="button " >Contact Us</button></a>
   </div>
       </nav>
   </div>
  )}
export default Header
