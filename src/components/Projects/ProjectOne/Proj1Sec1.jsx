import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projectone/one.jpg'
import autocad from '../../../assets/images/icons/autocad.png'
import sketchup from '../../../assets/images/icons/sketchup.png'
import vray from '../../../assets/images/icons/vray.png'
import photoshop from '../../../assets/images/icons/photoshop.png'
import { Imgcont, Number, Title, Subtitle, Conthree, Label, Labeltwo, Contfour, Labelthree, Icon } from '../SecOneGlobalStyles';

const SecOne = styled.section`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 6.5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.25rem 0;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;

  @media (max-width: 575.98px) {
    
  }
`;

const Namecont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: 0.5rem;
  bottom: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const Contwo = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 2rem;
    width: 100%;
  }

  @media (max-width: 575.98px) {
    margin-top: 1.875rem;
    width: 95%;
  }
`;

const Proj1Sec1 = () => {
  return (
    <SecOne>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 gx-0 gx-lg-5 gx-xl-5">
            <Imgcont>
              <Img src={one} alt="Project-one" />
              <Namecont>
                <Number>01</Number>
                <Title>CENTRO MULTIFUNCIONAL Y MEMORIAL DE SITIO:</Title>
                <Subtitle>COMUNITARIA 28</Subtitle>
              </Namecont>
            </Imgcont>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <Contwo >
              <Conthree>
                <Label>Description</Label>
                <Labeltwo>San Bruno has been characterized by being a neighborhood with numerous social and environmental problems, coupled with a lack of access to recreational and cultural activities, nearby health services, and areas designated for sports activities.</Labeltwo>
                <Labeltwo>The purpose of the project is to generate a restoration proposal to commemorate and contrast with what has already been built, with spaces that give rise to social interaction dynamics, applying the concept of multifunctionality to the design of these spaces.</Labeltwo>
                <Labeltwo>This aims to demonstrate that it is possible to develop quality architecture in the marginalized sectors of the city. This was my Thesis project in collaboration with Iván Moreno.</Labeltwo>
              </Conthree>
              <Contfour>
                <Labelthree>Designed with</Labelthree>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup" />
                  <Icon src={vray} alt="vray" />
                  <Icon src={photoshop} alt="photoshop" />
                </div>
              </Contfour>
            </Contwo>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Proj1Sec1
