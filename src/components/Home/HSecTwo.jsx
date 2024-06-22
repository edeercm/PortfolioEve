import React from 'react'
import styled from 'styled-components'
import Eve from '../../assets/images/EVE.jpg'
import HSecTwoAbout from './HSecTwoAbout';
import HSecTwoIcons from './HSecTwoIcons';

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

const HSecTwo = () => {
  return (
    <Section>
      <div className="container">
        <div className="row gap-4 gap-md-0">
          <div className="col-12 col-md-8 col-lg-5 d-flex justify-content-center">
            <Img src={Eve} alt="Avatar" />
          </div>
          <div className="col-12 col-md-4 col-lg-7 d-flex justify-content-center align-items-end">
            <div className='d-flex flex-column gap-3 align-items-center align-items-md-start'>
              <HSecTwoAbout />
              <HSecTwoIcons />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HSecTwo