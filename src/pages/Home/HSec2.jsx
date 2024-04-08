import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Eve from '../../assets/images/EVE.jpg'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--tertiary-color);

  @media (max-width: 575.97px) {
    height: auto;
    padding: 4rem 0;
  }
`;

const Img = styled.img`
  width: 90%;
  box-shadow: 
  0 4px 6px rgba(0, 0, 0, 0.1),
  0 1px 3px rgba(0, 0, 0, 0.08);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Intro = styled.span`
  font-size: 1.25rem;
  color: var(--quaternary-color);

  @media (max-width: 991.98px) {
    font-size: 1rem;
  }

  @media (max-width: 575.97px) {
    text-align: center;
  }
`;

const Icon = styled.a`
  svg {
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--quaternary-color);

    @media (max-width: 575.97px) {
      font-size: 1.5rem;
    }
  }
`;

const HomeSecTwo = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row gap-4 gap-md-0">
          <div className="col-12 col-md-8 col-lg-5 d-flex justify-content-center">
            <Img src={Eve} alt="Me-img" />
          </div>
          <div className="col-12 col-md-4 col-lg-7 d-flex justify-content-center align-items-end">
            <div className='d-flex flex-column gap-3 align-items-center align-items-md-start'>
              <Intro>I am an architect and interior designer passionate about creating inspiring and functional spaces.</Intro>
              <Intro>My commitment to innovation and excellence constantly drives me to improve and stay updated on the latest trends in architecture and interior design.</Intro>
              <div className='d-flex gap-2'>
                <Icon
                  target="_blank"
                  rel="noopener"
                  href="https://www.instagram.com/e.a_creativestudio/">
                  <FaInstagram />
                </Icon>
                <Icon
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/evelinohemi-alvarado/">
                  <FaLinkedin />
                </Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default HomeSecTwo