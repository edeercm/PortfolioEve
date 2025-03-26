import React from 'react'
import SecOne from './ProjOneSecOne'
import SecTwo from './ProjOneSecTwo'
import SecThree from './ProjOneSecThree'
import SecFour from './ProjOneSecFour'
import SecFive from './ProjOneSecFive'
import SecSix from './ProjOneSecSix'
import ProjectsNavigation from '../ProjectsNavigation'

const ProjectOne = () => {
  return <>
    <SecOne />
    <SecTwo />
    <SecThree />
    <SecFour />
    <SecFive />
    <SecSix />
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