import React from 'react'
import PTwoSecOne from './PTwoSecOne/PTwoSecOne'
import SecTwo from './ProjTwoSecTwo'
import SecThree from './ProjTwoSecThree'
import SecFour from './ProjTwoSecFour'
import ProjectsNavigation from '../ProjectsNavigation'

import pSecOneData from '../PSecOneData'
import PSecOne from '../PSecOne'


const PTwo = () => {
  const projectTwo = pSecOneData.projects.find(project => project.id === 2);

  return <>
    <PTwoSecOne />
    <PSecOne project={projectTwo} />;
    <SecTwo />
    <SecThree />
    <SecFour />
    <ProjectsNavigation
      projects={[
        { path: '/POne', name: 'Centro Multifuncional y Memorial de Sitio: Comunitaria 28' },
        { path: '/PTwo', name: 'Remodelación Comedor Studio YG' },
        { path: '/ProjectThree', name: 'Luna y Mar Spa Interior Design' },
        { path: '/FurnitureProjects', name: 'Furniture - Personal Creations' }
      ]}
      currentProjectIndex={1} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default PTwo


