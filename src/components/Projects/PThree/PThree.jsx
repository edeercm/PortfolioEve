import React from 'react'
import PThreeSecOne from '../PThree/PThreeSecOne/PThreeSecOne'
import ProjThreeSecTwo from './ProjThreeSecTwo'
import SecThree from './ProjThreeSecThree'
import SecFour from './ProjThreeSecFour'
import SecFive from './ProjThreeSecFive'
import SecSix from './ProjThreeSecSix'
import ProjNavigation from '../ProjectsNavigation'

const ProjectThree = () => {
  return <>
    <PThreeSecOne />
    <ProjThreeSecTwo />
    <SecThree />
    <SecFour />
    <SecFive />
    <SecSix />
    <ProjNavigation
      projects={[
        { path: '/POne', name: 'Centro Multifuncional y Memorial de Sitio: Comunitaria 28' },
        { path: '/PTwo', name: 'Remodelación Comedor Studio YG' },
        { path: '/PThree', name: 'Luna y Mar Spa Interior Design' },
        { path: '/FurnitureProjects', name: 'Furniture - Personal Creations' }
      ]}
      currentProjectIndex={2} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default ProjectThree
