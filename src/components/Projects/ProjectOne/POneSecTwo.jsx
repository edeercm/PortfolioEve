import React from 'react'
import styled from 'styled-components';
import { two } from './POneImages';
import { GlobalSection, Label } from './POneGlobStyles';

const Section = styled(GlobalSection)` // Extender el estilo base
 @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
  }
`;

const ImgCont = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const POneSecTwo = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ImgCont>
              <img src={two} alt="Render two" />
              <Label>Floor plan view</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default POneSecTwo