import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Eve from '../../assets/images/EVE.jpg'
import '../Home/Home.css'

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 575.97px) {
    margin-top: 1rem;
    width: 90%;
    text-align: justify;
  }
`;

const Home = () => {
  return <>
    <section id='home'>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="home-content">
              <h1 className='home-title'>Portfolio</h1>
              <span className='home-label'>Evelin Nohemi Alvarado Mendoza | Architect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='aboutme'>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-5 col-xl-5 d-flex justify-content-center">
            <img src={Eve} alt="Me-img" className='aboutme-img' />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-7 col-xl-7 d-flex justify-content-center align-items-end">
            <Cont>
              <span>I am an architect and interior designer passionate about creating inspiring and functional spaces.</span>
              <span>My commitment to innovation and excellence constantly drives me to improve and stay updated on the latest trends in architecture and interior design.</span>
              <div className='aboutme-icons d-flex mt-2 gap-1'>
                <FaInstagram />
                <FaLinkedin />
              </div>
            </Cont>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home