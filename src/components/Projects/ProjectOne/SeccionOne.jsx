import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projectone/one.png'
import autocad from '../../../assets/images/icons/autocad.png'
import sketchup from '../../../assets/images/icons/sketchup.png'
import vray from '../../../assets/images/icons/vray.png'
import photoshop from '../../../assets/images/icons/photoshop.png'
import '../../Projects/SeccionOneGlobalStyles.css'

const SeccOne = styled.section`
  width: 100%;
  height: 105vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 157vh;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.25rem 0;
  }
`;

const Contone = styled.div`
  width: 85%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Imgcont = styled.div`
  position: relative;
  width: 105%;
  height: auto;

  @media (max-width: 575.98px) {
    width: 100%;
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

const Number = styled.h3`
  font-size: 3.25rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const Title = styled.h4`
  line-height: 0.75;
  font-size: 1.575rem;
  color: var(--quaternary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    font-size: 0.95rem;
  }
`;

const Subitle = styled.h4`
  font-size: 1.575rem;
  color: var(--secondary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const Contwo = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
  }

  @media (max-width: 575.98px) {
    margin-top: 1.875rem;
    width: 95%;
  }
`;

const Conthree = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    align-items: start;
  }
`;

const Label = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;

const Labeltwo = styled.span`
  color: var(--quaternary-color);
  font-size: 0.875rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    font-size: 0.925rem;
  }
`;

const Contfour = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    margin-top: 1.75rem;
  }
`;

const Labelthree = styled.h4`
  font-style: italic;
  font-size: 1.125rem;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    font-size: 1.25rem;
  }
`;

const Icon = styled.img`
  width: 12.5%;
  object-fit: contain;
  object-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    width: 17.5%;
  }
`;


const SeccionOne = () => {
  return (
    <SeccOne>
      <Contone className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 gx-0">
            <Imgcont>
              <Img src={one} alt="Project-one" />
              <Namecont>
                <Number>01</Number>
                <Title>CENTRO MULTIFUNCIONAL Y MEMORIAL DE SITIO:</Title>
                <Subitle>COMUNITARIA 28</Subitle>
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
                  <Icon src={autocad} alt="autocad"  />
                  <Icon src={sketchup} alt="sketchup"  />
                  <Icon src={vray} alt="vray"  />
                  <Icon src={photoshop} alt="photoshop"  />
                </div>
              </Contfour>
            </Contwo>
          </div>
        </div>
      </Contone>
    </SeccOne>
  );
};

export default SeccionOne