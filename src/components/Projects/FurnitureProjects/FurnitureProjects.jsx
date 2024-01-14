import React from 'react'
import FurnProjOne from './FurnProjOne/FurnProjOne'
import FurnProjTwo from './FurnProjTwo/FurnProjTwo'
import FurnProjThree from './FurnProjThree/FurnProjThree'
import FurnProjFour from './FurnProjFour/FurnProjFour'
import ProjNavigation from '../ProjectsNavigation'

const FurnitureProjects = () => {
  return <>
    <FurnProjOne />
    <FurnProjTwo />
    <FurnProjThree />
    <FurnProjFour />
    <ProjNavigation
      projects={[
        { path: '/ProjectOne', name: 'Centro Multifuncional y Memorial de Sitio: Comunitaria 28' },
        { path: '/ProjectTwo', name: 'Remodelación Comedor Studio YG' },
        { path: '/ProjectThree', name: 'Luna y Mar Spa Interior Design' },
        { path: '/FurnitureProjects', name: 'Furniture - Personal Creations' }
      ]}
      currentProjectIndex={3} // Cambia este índice según la página actual (0 para ProjectOne, 1 para ProjectTwo, etc.)
    />
  </>
}

export default FurnitureProjects