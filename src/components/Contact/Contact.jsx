import React from 'react'
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
{/*left side*/} 

<div className="flexColStart c-left">
<span className="orangeText">Our Contacts</span>
<span className="primaryText">Easy to Contact Us</span>
<span className="secondaryText">We are always ready to help by providing the best services for you. We believe a good place to live can make your life better</span>

<div className="flexColStart contactModes">
    {/*left row*/} 
   <div className="flexStart row">
    <div className="flexColCenter mode">
        <div className="flexStart">
            <div className="flexCenter icon">
               <MdCall size = {25}/>
            </div>
            <div className="flexColStart detail">
              <span className = "primamryText">Call</span>  
              <span className ="secondaryText">012 125 1252</span>
            </div>
        </div>
        <div className="flexCenter button">
          Call Now  
        </div>
    </div>

    <div className="flexColCenter mode">
        <div className="flexStart">
            <div className="flexCenter icon">
               <BsFillChatDotsFill size = {25}/>
            </div>
            <div className="flexColStart detail">
              <span className = "primamryText">Chat</span>  
              <span className ="secondaryText">012 125 1252</span>
            </div>
        </div>
        <div className="flexCenter button">
          Call Now  
        </div>
    </div>


    </div> 

{/*right row*/}

<div className="flexStart row">
    <div className="flexColCenter mode">
        <div className="flexStart">
            <div className="flexCenter icon">
               <BsFillChatDotsFill size = {25}/>
            </div>
            <div className="flexColStart detail">
              <span className = "primamryText">Videocall</span>  
              <span className ="secondaryText">012 125 1252</span>
            </div>
        </div>
        <div className="flexCenter button">
          Videocall Now  
        </div>
    </div>

    <div className="flexColCenter mode">
        <div className="flexStart">
            <div className="flexCenter icon">
               <HiChatBubbleBottomCenter size = {25}/>
            </div>
            <div className="flexColStart detail">
              <span className = "primamryText">Message</span>  
              <span className ="secondaryText">012 125 1252</span>
            </div>
        </div>
        <div className="flexCenter button">
          Message Now  
        </div>
    </div>


    </div> 

</div>

</div>

{/*right side*/}

<div className="c-right">
<div className="image-container">
    <img src="./contact.jpg" alt="" />
</div>
</div>
        </div>
    </section>
  )
}

export default Contact
