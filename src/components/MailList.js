import React from 'react'
import './MailList.css'
function MailList() {
  return (
    <div className="maillist">
        <h1 className="mailtitle">Save time, save money!</h1>
        <span className="mailtitle1">Sign up and we'll send the best deals to you</span>
       <div className="mailcontainer">
        <input type="text" placeholder='Your Email'/>
        <button>Subscribe</button>
       </div>
    </div>
  )
}

export default MailList