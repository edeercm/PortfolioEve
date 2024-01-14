import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import prev from '../../assets/images/projectsnavigation/prev.png'
import next from '../../assets/images/projectsnavigation/next.png'

const Navcont = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    
  }

  @media (max-width: 575.98px) {
    justify-content: space-around;
  }
`;

const Img = styled.img`
  margin-bottom: 2.5rem;
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
    <Navcont className='container-fluid'>
      {isProjectOne ? (
        <Img src={prev} alt="Prev-icon" disabled />
      ) : (
        <Link to={projects[prevProjectIndex].path}>
          <Img src={prev} alt="Prev-icon" />
        </Link>
      )}
      {isProjectFour ? (
        <Img src={next} alt="Next-icon" disabled />
      ) : (
        <Link to={projects[nextProjectIndex].path}>
          <Img src={next} alt="Next-icon" />
        </Link>
      )}
    </Navcont>
  );
};

export default ProjNavigation;