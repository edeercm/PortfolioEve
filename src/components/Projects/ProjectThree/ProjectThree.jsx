import React from 'react'
import SecOne from './ProjThreeSecOne'
import SecTwo from './ProjThreeSecTwo'
import SecThree from './ProjThreeSecThree'
import SecFour from './ProjThreeSecFour'
import SecFive from './ProjThreeSecFive'
import SecSix from './ProjThreeSecSix'
import ProjNavigation from '../ProjectsNavigation'

const ProjectThree = () => {
  return <>
    <SecOne />
    <SecTwo />
    <SecThree />
    <SecFour />
    <SecFive />
    <SecSix />
    <ProjNavigation
      projects={[
        { path: '/ProjectOne', name: 'Centro Multifuncional y Memorial de Sitio: Comunitaria 28' },
        { path: '/ProjectTwo', name: 'Remodelación Comedor Studio YG' },
        { path: '/ProjectThree', name: 'Luna y Mar Spa Interior Design' },
        { path: '/FurnitureProjects', name: 'Furniture - Personal Creations' }
      ]}
      currentProjectIndex={2} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default ProjectThree
