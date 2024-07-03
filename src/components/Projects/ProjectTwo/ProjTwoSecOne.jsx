import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projectwo/one.png'
import { Imgcont, Number, Title, Subtitle, Conthree, Label, Labeltwo, Contfour, Labelthree, Icon } from '../SecOneGlobalStyles';

const SecOne = styled.section`
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
   right: -2rem;
   bottom: -2rem;
   display: flex;
   flex-direction: column;
   align-items: end;

   @media (min-width: 575.98px) and (max-width: 991.98px) {
     right: 1.5rem;
     bottom: -3rem;
   }

   @media (max-width: 575.98px) {
     right: 0;
     bottom: 1rem;
   }
 `;

const Contwo = styled.div`
   width: 85%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   @media (min-width: 575.98px) and (max-width: 991.98px) {
     margin-top: 3.75rem;
     width: 90%;
   }

   @media (max-width: 575.98px) {
     margin-top: 1rem;
     width: 95%;
   }
 `;

const ProjTwoSecOne = () => {
  return (
    <SecOne>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Imgcont>
              <Img src={one} alt="Project-1" />
              <Namecont>
                <Number>02</Number>
                <Title>RESTYLING</Title>
                <Subtitle>KITCHEN/DINING AREA</Subtitle>
              </Namecont>
            </Imgcont>
          </div>
          <div className="col-12 col-lg-6">
            <PTwoInfo />
          </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-center">
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
                  <Icon src={vray} alt="vray" />
                  <Icon src={photoshop} alt="photoshop" />
                </div>
              </Contfour>
            </Contwo>
          </div> */}
        </div>
      </div>
    </SecOne>
  );
};

export default ProjTwoSecOne 
