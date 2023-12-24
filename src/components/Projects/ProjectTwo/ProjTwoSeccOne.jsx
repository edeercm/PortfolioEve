import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projectwo/one.png'
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
    height: auto;
    padding: 6.5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 2rem 0;
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
  width: 100%;
  height: 80vh;

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  object-position: center;
  
  @media (max-width: 575.98px) {
    
  }
`;

const Namecont = styled.div`
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    bottom: 0;
    right: 0;
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
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Imgcont>
              <Img src={one} alt="Project-1" />
              <Namecont>
                <Number>02</Number>
                <Title>RESTYLING</Title>
                <Subitle>KITCHEN/DINING AREA</Subitle>
              </Namecont>
            </Imgcont>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-center">
            <Contwo>
              <Conthree>
                <Label>Description</Label>
                <Labeltwo>The remodeling of the kitchen/dining area for employees at Studio YG represented an exciting transformation project. Initially, it was a warehouse; the space has been reinvented to offer a functional and welcoming environment for team members.</Labeltwo>
                <Labeltwo>Recognizing the importance of personal space for our employees, a dressing room with customized lockers was created.</Labeltwo>
                <Labeltwo>To maximize resources and reduce waste, the decision was made to reuse existing furniture whenever possible. Through smart reconfiguration, some existing tables were retained in the outdoor area."</Labeltwo>
              </Conthree>
              <Contfour>
                <Labelthree>Designed with</Labelthree>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup" />
                  <Icon src={vray} alt="vray" className='icon-img' />
                  <Icon src={photoshop} alt="photoshop" />
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