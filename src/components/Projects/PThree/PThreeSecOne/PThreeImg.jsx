import React from 'react'
import styled from 'styled-components';
import pSecOneData from '../../PSecOneData';
import { Number, Title, Subtitle } from '../../PSecOneStyles';

const Img = styled.img`
  width: 95%;
  object-fit: contain;
  object-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const NameCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: 3rem;
  bottom: 0.5rem;

  h3, h4 {
    color: var( --tertiary-color);
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    right: 0.5rem;
    bottom: 0.25rem;
  }
`;

const PThreeImg = () => {
  const { projectThree } = pSecOneData;

  return (
    <div className='position-relative'>
      {projectThree.map((project, index) => (
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

export default PThreeImg