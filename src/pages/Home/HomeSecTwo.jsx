import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Eve from '../../assets/images/EVE.jpg'

const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--tertiary-color);

  @media (max-width: 575.97px) {
  }
`;

const Img = styled.img`
  max-width: 90%;
  height: auto;
  object-fit: contain;
  object-position: center;
  box-shadow: 
  0 4px 6px rgba(0, 0, 0, 0.1),
  0 1px 3px rgba(0, 0, 0, 0.08);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    max-width: 100%;
  }

  @media (max-width: 575.97px) {
    max-width: 100%;
  }
`;

const LabelTwo = styled.span`
  color: var(--quaternary-color);
  font-size: 1.025rem;

  @media (max-width: 575.97px) {
    margin-top: 0.75rem;
    text-align: justify;
  }
`;

const IconsContainer = styled.div`
  margin-top: 0.25rem;
  display: flex;
  gap: 0.5rem;

  svg {
    color: var(--quaternary-color);
    font-size: 1.35rem;
    cursor: pointer;
  }

  @media (max-width: 575.97px) {
    margin-top: 1rem;
  }
`;

const HomeSecTwo = () => {
  return <>
    <SectionTwo id='aboutme'>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-5 col-xl-5 d-flex justify-content-center">
            <Img src={Eve} alt="Me-img" />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-7 col-xl-7 d-flex justify-content-center align-items-end">
            <div className='d-flex flex-column gap-2'>
              <LabelTwo>I am an architect and interior designer passionate about creating inspiring and functional spaces.</LabelTwo>
              <LabelTwo>My commitment to innovation and excellence constantly drives me to improve and stay updated on the latest trends in architecture and interior design.</LabelTwo>
              <IconsContainer>
                <Link to={'https://www.instagram.com/e.a_creativestudio/'} target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                <Link to={'https://www.linkedin.com/in/evelinohemi-alvarado/'} target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
              </IconsContainer>
            </div>
          </div>
        </div>
      </div>
    </SectionTwo>
  </>
}

export default HomeSecTwo