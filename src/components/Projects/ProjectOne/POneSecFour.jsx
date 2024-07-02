import React from 'react';
import styled from 'styled-components';
import { GlobalSection, Label } from './POneGlobStyles';
import { five } from './POneImages';

const Section = styled(GlobalSection)` // Extender el estilo base
  @media (max-width: 991.98px) {
    height: auto;
    padding: 0 0 1.25rem;
  }
`;

const ImgCont = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const POneSectFour = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ImgCont>
              <img src={five} alt="Render" />
              <Label>Interior view of workshop</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default POneSectFour;

