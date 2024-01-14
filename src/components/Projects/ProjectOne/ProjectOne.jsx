import React from 'react'
import SeccionOne from './SeccionOne'
import SeccionTwo from './SeccionTwo'
import SeccionThree from './SeccionThree'
import SeccionFour from './SeccionFour'
import SeccionFive from './SeccionFive'
import SeccionSix from './SeccionSix'
import ProjectsNavigation from '../ProjectsNavigation'

const ProjectOne = () => {

  return <>
    <SeccionOne />
    <SeccionTwo />
    <SeccionThree />
    <SeccionFour />
    <SeccionFive />
    <SeccionSix />
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