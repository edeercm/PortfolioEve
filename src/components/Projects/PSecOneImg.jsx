import React from 'react'
import styled from 'styled-components';
import { Number, Title, Subtitle } from './PSecOneStyles';

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: ${(props) => props.objectFit || 'contain'};
  object-position: ${(props) => props.objectPosition || 'center'};

  @media (max-width: 575.98px) {
    // Agrega otros estilos si es necesario
  }
`;

const NameCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: ${(props) => props.right || '0'};
  bottom: ${(props) => props.bottom || '0'};

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    ${(props) => props.media?.['@media (min-width: 575.98px) and (max-width: 991.98px)']}
  }

  @media (max-width: 575.98px) {
    ${(props) => props.media?.['@media (max-width: 575.98px)']}
  }
`;

const PSecOneImg = ({ projects, styles }) => {
  return (
    <div className='position-relative'>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Img src={project.imgOne} alt={`Render ${project.number}`} {...styles.Img} />
          <NameCont {...styles.NameCont}>
            <Number>{project.number}</Number>
            <Title>{project.name}</Title>
            <Subtitle>{project.subtitle}</Subtitle>
          </NameCont>
        </React.Fragment>
      ))}
    </div>
  );
}

export default PSecOneImg