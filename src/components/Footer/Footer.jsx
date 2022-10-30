import React from 'react'
import './footer.css'
import zuriImg from '../../images/Zuri.Internship_Logo.png'
import footerImg from '../../images/I4G.png'

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <div id='zuriImg'>
          <img src={zuriImg} alt="" />
        </div>
        <div id='hng-text'>
          <h5 className='fs-6 fw-normal'>HNG Internship 9 Frontend Task</h5>
        </div>
        <div id='footerImg'>
          <img src={footerImg} alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Footer
