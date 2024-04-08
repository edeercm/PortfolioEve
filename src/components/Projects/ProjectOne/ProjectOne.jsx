import React from 'react'
import SecOne from './Proj1Sec1'
import SecTwo from './Proj1Sec2'
import SecThree from './Proj1Sec3'
import SecFour from './Proj1Sec4'
import ProjectsNavigation from '../ProjectsNavigation'

const ProjectOne = () => {
  return <>
    <SecOne />
    <SecTwo />
    <SecThree />
    <SecFour />
    <ProjectsNavigation
      projects={[
        { path: '/ProjectOne', name: 'Centro Multifuncional y Memorial de Sitio: Comunitaria 28' },
        { path: '/ProjectTwo', name: 'Remodelación Comedor Studio YG' },
        { path: '/ProjectThree', name: 'Luna y Mar Spa Interior Design' },
        { path: '/FurnitureProjects', name: 'Furniture - Personal Creations' }
      ]}
      currentProjectIndex={0} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default ProjectOne