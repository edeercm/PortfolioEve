import React from 'react'
import POneSecOne from './POneSecOne/POneSecOne'
import POneSecTwo from './POneSecTwo'
import POneSecThree from './POneSecThree'
import POneSecFour from './POneSecFour'
import ProjectsNavigation from '../ProjectsNavigation'

const ProjectOne = () => {
  return <>
    <POneSecOne />
    <POneSecTwo />
    <POneSecThree />
    <POneSecFour />
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