import React from 'react'
import SecOne from './ProjTwoSecOne'
import SecTwo from './ProjTwoSecTwo'
import SecThree from './ProjTwoSecThree'
import SecFour from './ProjTwoSecFour'
import ProjectsNavigation from '../ProjectsNavigation'

const ProjectTwo = () => {
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
      currentProjectIndex={1} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default ProjectTwo
