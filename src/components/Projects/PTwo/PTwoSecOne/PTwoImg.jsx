import React from 'react'
import styled from 'styled-components';
import pOneTwoData from '../../POneTwoData';
import { Number, Title, Subtitle } from '../../PSecOneStyles';

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  object-position: center;

  @media (max-width: 575.98px) {

  }
`;

const NameCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: -2rem;
  bottom: -2rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 1.5rem;
    bottom: -3rem;
  }

  @media (max-width: 575.98px) {
    right: 0;
    bottom: 1rem;
  }
`;

const PTwoImg = () => {
  const { projectTwo } = pOneTwoData;

  return (
    <div className='position-relative'>
      {projectTwo.map((project, index) => (
        <React.Fragment key={index}>
          <Img src={project.imgOne} alt='Render three' />
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