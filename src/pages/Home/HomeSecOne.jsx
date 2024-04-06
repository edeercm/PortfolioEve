import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  text-align: end;
  align-items: center;

  @media (max-width: 575.97px) {
  }
`;

const Title = styled.h1`
  color: var(--secondary-color);
  line-height: 0.875;
  font-size: 9.925rem;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 7.25rem;
  }

  @media (max-width: 575.97px) {
    font-size: 3.25rem;
  }
  
`;

const Label = styled.span`
  color: var(--secondary-color);
  font-size: 1.275rem;
  text-transform: uppercase;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.97px) {
    line-height: 1;
    font-size: 0.785rem;
  }
`;

const HomeSecOne = () => {
  return <>
    <Section id='home'>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            <Title>Portfolio</Title>
            <Label>Evelin Nohemi Alvarado Mendoza | Architect</Label>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default HomeSecOne