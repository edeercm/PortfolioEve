import React from 'react';
import styled from 'styled-components';
import { LblOne, LblThree } from './ResGlobalSty';
import autocad from '../../assets/images/icons/autocad.png';
import sketchup from '../../assets/images/icons/sketchup.png';
import vray from '../../assets/images/icons/vray.png';
import illustrator from '../../assets/images/icons/illustrator.png';
import photoshop from '../../assets/images/icons/photoshop.png';
import office from '../../assets/images/icons/office.png';
import revit from '../../assets/images/icons/revit.png';

const Icon = styled.img`
  width: 35%;

  @media (max-width: 575.97px) {
    width: 40%;
  }
`;

const softwareList = [
  { name: 'AutoCad', icon: autocad },
  { name: 'SketchUp', icon: sketchup },
  { name: 'Vray', icon: vray },
  { name: 'Illustrator', icon: illustrator },
  { name: 'Photoshop', icon: photoshop },
  { name: 'Office', icon: office },
  { name: 'Revit', icon: revit },
];

const ResSecFive = () => {
  return (
    <div className='d-flex flex-column gap-3'>
      <LblOne>Software</LblOne>
      <div className='row'>
        {softwareList.map((software) => (
          <div className='col-4 d-flex flex-column align-items-center mb-3'>
            <Icon src={software.icon} alt={`${software.name}-icon`} />
            <LblThree>{software.name}</LblThree>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResSecFive;
