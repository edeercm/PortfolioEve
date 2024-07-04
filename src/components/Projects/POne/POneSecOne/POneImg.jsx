import React from 'react'
import styled from 'styled-components';
import pSecOneData from '../../PSecOneData';
import { Number, Title, Subtitle } from '../../PSecOneStyles';

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

const POneImg = () => {
  const { projectOne } = pSecOneData;

  return <>
    <div className='position-relative'>
    {projectOne.map((project, index) => (
        <React.Fragment key={index}>
          <img src={project.imgOne} alt='Render one' className='w-100' />
          <NameCont>
            <Number>{project.number}</Number>
            <Title>{project.name}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
          </NameCont>
        </React.Fragment>
      ))}
    </div>
  </>
}

export default POneImg