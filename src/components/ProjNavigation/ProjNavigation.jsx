import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <div>
      {/* <Link to={projects[prevProjectIndex].path}>Prev Project</Link> */}
      {isProjectOne ? (
        <span>Prev Project</span>
      ) : (
        <Link to={projects[prevProjectIndex].path}>Prev Project</Link>
      )}
      <span> | </span>
      {/* <Link to={projects[nextProjectIndex].path}>Next Project</Link> */}
      {isProjectFour ? (
        <span>Next Project</span>
      ) : (
        <Link to={projects[nextProjectIndex].path}>Next Project</Link>
      )}
    </div>
  );
};

export default ProjNavigation;