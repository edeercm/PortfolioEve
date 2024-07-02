import React from 'react'
import styled from 'styled-components';
import autocad from '../../../../assets/images/icons/autocad.png'
import sketchup from '../../../../assets/images/icons/sketchup.png'
import vray from '../../../../assets/images/icons/vray.png'
import photoshop from '../../../../assets/images/icons/photoshop.png'
import { DescLabel, DescCont, Desc, IconsCont, DesignedLabel, Icon } from '../../Sec1GlobalStls';

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    gap: 2rem;
    width: 100%;
  }

  @media (max-width: 575.98px) {
    width: 95%;
  }
`;

const POneInfo = () => {
  return <>
    <Container>
      <DescLabel>Description</DescLabel>
      <DescCont>
        <Desc>San Bruno has been characterized by being a neighborhood with numerous social and environmental problems, coupled with a lack of access to recreational and cultural activities, nearby health services, and areas designated for sports activities.</Desc>
        <Desc>The purpose of the project is to generate a restoration proposal to commemorate and contrast with what has already been built, with spaces that give rise to social interaction dynamics, applying the concept of multifunctionality to the design of these spaces.</Desc>
        <Desc>This aims to demonstrate that it is possible to develop quality architecture in the marginalized sectors of the city. This was my Thesis project in collaboration with Iván Moreno.</Desc>
      </DescCont>
      <IconsCont>
        <DesignedLabel>Designed with</DesignedLabel>
        <div className="d-flex flex-row justify-content-center gap-3">
          <Icon src={autocad} alt="autocad" />
          <Icon src={sketchup} alt="sketchup" />
          <Icon src={vray} alt="vray" />
          <Icon src={photoshop} alt="photoshop" />
        </div>
      </IconsCont>
    </Container>
  </>
}

export default POneInfo