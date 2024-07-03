import React from 'react'
import styled from 'styled-components';
import { one } from '../POneImages';
import { Number, Title, Subtitle } from '../../Sec1GlobalStls';

const NameCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: 0.5rem;
  bottom: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const Sec1Img = () => {
  return <>
    <div className='position-relative'>
      <img src={one} alt="Render one" className='w-100' />
      <NameCont>
        <Number>01</Number>
        <Title>CENTRO MULTIFUNCIONAL Y MEMORIAL DE SITIO:</Title>
        <Subtitle>COMUNITARIA 28</Subtitle>
      </NameCont>
    </div>
  </>
}

export default Sec1Img