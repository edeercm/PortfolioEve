import React from 'react'
import ProjThreeSeccOne from './ProjThreeSeccOne'
import ProjThreeSeccTwo from './ProjThreeSeccTwo'
import ProjThreeSeccThree from './ProjThreeSeccThree'
import ProjThreeSeccFour from './ProjThreeSeccFour'
import ProjThreeSeccFive from './ProjThreeSeccFive'
import ProjThreeSeccSix from './ProjThreeSeccSix'
import ProjNavigation from '../../ProjNavigation/ProjNavigation'

const ProjectThree = () => {
  return <>
    <ProjThreeSeccOne />
    <ProjThreeSeccTwo />
    <ProjThreeSeccThree />
    <ProjThreeSeccFour />
    <ProjThreeSeccFive />
    <ProjThreeSeccSix />
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
