import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

           {/*left side*/} 
           <div className="flexColstart f-left">
            <img src="./logo2.png" alt="" width={120}/>

           <span className="secondaryText">
           Our vision is to make all people 
the best place to live for them
            </span> 
           </div>

           <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>125 California, Fun Street, USA</span>

            <div className="flexCenter f-menu">
               <span>Properties</span>
               <span>Services</span>
               <span>Contact</span>
               <span>About us</span> 
            </div>
           </div>
        </div>
    </section>
  )
}

export default Footer
