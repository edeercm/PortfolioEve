import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import prev from '../../assets/images/projectsnavigation/prev.png'
import next from '../../assets/images/projectsnavigation/next.png'

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--principal-color);

  a {
    text-decoration: none;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    
  }

  @media (max-width: 575.98px) {
    height: 15vh;
    justify-content: space-around;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;

const Img = styled.img`
  width: 3.75rem;
  cursor: pointer;

  ${props => props.disabled && `
    cursor: not-allowed;
  `}

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    width: 3.075rem;
  }
`;

const Label = styled.h1`
  color: var(--secondary-color);
  font-size: 1.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    font-size: 0.875rem;
  }
`;

const ProjNavigation = ({ projects, currentProjectIndex }) => {

  const prevProjectIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  const nextProjectIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll hacia la parte superior con animación suave al cambiar de proyecto
  }, [location.pathname]); // Ejecutar cuando cambie la ruta

  const isProjectOne = location.pathname === '/ProjectOne';

  const isProjectFour = location.pathname === '/FurnitureProjects';

  return (
    <Container className='container-fluid'>
      {isProjectOne ? (
        <SubContainer>
          <Img src={prev} alt="Prev-icon" />
          <Label>PREV</Label>
        </SubContainer>
      ) : (
        <Link to={projects[prevProjectIndex].path}>
          <SubContainer>
            <Img src={prev} alt="Prev-icon" />
            <Label>PREV</Label>
          </SubContainer>
        </Link>
      )}
      {isProjectFour ? (
        <SubContainer>
          <Img src={next} alt="Next-icon" />
          <Label>NEXT</Label>
        </SubContainer>
      ) : (
        <Link to={projects[nextProjectIndex].path}>
          <SubContainer>
            <Img src={next} alt="Next-icon" />
            <Label>NEXT</Label>
          </SubContainer>
        </Link>
      )}
    </Container>
  );
};

export default ProjNavigation;