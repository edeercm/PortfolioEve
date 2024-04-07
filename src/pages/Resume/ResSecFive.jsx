import React from 'react'
import styled from 'styled-components'
import { LblOne, LblThree } from './ResGlobalSty'
import autocad from '../../assets/images/icons/autocad.png'
import sketchup from '../../assets/images/icons/sketchup.png'
import vray from '../../assets/images/icons/vray.png'
import illustrator from '../../assets/images/icons/illustrator.png'
import photoshop from '../../assets/images/icons/photoshop.png'
import office from '../../assets/images/icons/office.png'
import revit from '../../assets/images/icons/revit.png'

const Icon = styled.img`
  width: 35%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 40%;
  }
`;

const ResSecFive = () => {
  return <>
    <div className='d-flex flex-column gap-3'>
      <LblOne>Software</LblOne>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={autocad} alt="AutoCad-icon" />
            <LblThree>AutoCad</LblThree>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={illustrator} alt="Illustrator-icon" />
            <LblThree>Illustrator</LblThree>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={revit} alt="Revit-icon" />
            <LblThree>Revit</LblThree>
          </div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={sketchup} alt="SketchUp-icon" />
            <LblThree>SketchUp</LblThree>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={photoshop} alt="Photoshop-icon" />
            <LblThree>Photoshop</LblThree>
          </div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={vray} alt="Vray-icon" />
            <LblThree>Vray</LblThree>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <Icon src={office} alt="Office-icon" />
            <LblThree>Office</LblThree>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ResSecFive