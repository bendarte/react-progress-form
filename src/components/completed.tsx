import React from 'react'
import Complete from '../assets/images/icon-thank-you.svg'


function completed() {
  return (
    <div>
        <div className="complete-container">
            <img src={Complete} alt="" />
            <h2>Thank you!</h2>
            <p>Thanks for conirfming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us support@loregaming.com</p>
        </div>
    </div>
  )
}

export default completed