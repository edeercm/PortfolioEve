import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  text-align: end;
  align-items: center;
  justify-content: center;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

const Label = styled.h1`
  font-weight: 400;
  line-height: 1;
  font-size: 10rem;
  text-transform: uppercase;
  color: var(--secondary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 8.5rem;
  }

  @media (max-width: 575.97px) {
    font-size: 5rem;
  }
  
`;

const Desc = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--secondary-color);

  @media (max-width: 575.97px) {
    font-size: 0.75rem;
  }
`;

const HomeSecOne = () => {
  return <>
    <Section>
      <div className='d-flex flex-column justify-content-center'>
        <Label>Portfolio</Label>
        <Desc>Evelin Nohemi Alvarado Mendoza | Architect</Desc>
      </div>
    </Section>
  </>
}

export default HomeSecOne