import React from 'react'
import styled from 'styled-components';
import pSecOneData from '../../PSecOneData';
import { Number, Title, Subtitle } from '../../Sec1GlobalStls';

const NameCont = styled.div`
  position: absolute;
  right: -2rem;
  bottom: -2rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 1.5rem;
    bottom: -3rem;
  }

  @media (max-width: 575.98px) {
    right: 0;
    bottom: 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  object-position: center;

  @media (max-width: 575.98px) {

  }
`;

const PTwoImg = () => {
  const { projectTwo } = pSecOneData;

  return (
    <div className='position-relative'>
      {projectTwo.map((project, index) => (
        <React.Fragment key={index}>
          <Img src={project.imgOne} alt='Render two' />
          <NameCont>
            <Number>{project.number}</Number>
            <Title>{project.name}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
          </NameCont>
        </React.Fragment>
      ))}
    </div>
  )
}

export default PTwoImg