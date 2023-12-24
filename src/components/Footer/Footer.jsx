import React from 'react'
import { FaGithub, FaCode, FaHeart } from "react-icons/fa";
import '../Footer/Footer.css'

const Footer = () => {
  return <>
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-content d-flex flex-column align-items-center justify-content-center">
              <div className='footer-label d-flex align-items-center gap-1'>
                <span>Desing by Eve</span>
                <FaHeart />
              </div>
              <div className='footer-label d-flex align-items-center gap-1'>
                <span className='footer-email'>arq.evelinalvarado@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer