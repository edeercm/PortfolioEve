import React from 'react'
import styled from 'styled-components';
import { GlobalSection, Label } from './POneGlobStyles';
import imgone from '../../../assets/images/projectone/five.jpg'
import imgtwo from '../../../assets/images/projectone/five01.jpg'

const Section = styled(GlobalSection)` // Extender el estilo base
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 0 0 5rem;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 2.5rem 0;
  }
`;

const ImgCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;
  
  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const POneSecThree = () => {
  return (
    <Section>
      <div className="container">
        <div className="row gap-5 gap-lg-0">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <ImgCont>
              <img src={imgone} alt="Render" />
              <Label>Interior view of central courtyard</Label>
            </ImgCont>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <ImgCont>
              <img src={imgtwo} alt="Render" />
              <Label>Interior view of central courtyard</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default POneSecThree 