import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureThree/one.png'
import autocad from '../../../../assets/images/icons/autocad.png'
import sketchup from '../../../../assets/images/icons/sketchup.png'
import vray from '../../../../assets/images/icons/vray.png'
import illustrator from '../../../../assets/images/icons/illustrator.png'
import { ContOne, ConTwo, Img, Number, Title, ContFive, LabelOne, LabelTwo, ContSix, LabelThree, Icon } from '../FurnSecOneGloblalStyles'

const SecOne = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 6.5rem 0;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 0;
  }
`;

const ContThree = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    right: -4.25rem;
    bottom: -2.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 1rem;
    bottom: 1rem;
  }

  @media (max-width: 575.97px) {
    right: 0;
    bottom: -5rem;
  }
`;

const ContFour = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 5rem;
    width: 90%;
  }

  @media (max-width: 575.97px) {
    margin-top: 6.75rem;
    width: 100%;
  }
`;

const FurnThreeSeccOne = () => {
  return (
    <SecOne>
      <ContOne className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6">
            <ConTwo>
              <Img src={one} alt="Render-one" />
              <ContThree>
                <Number>03</Number>
                <Title>SmileStorage Center</Title>
              </ContThree>
            </ConTwo>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <ContFour>
              <ContFive>
                <LabelOne>Description</LabelOne>
                <LabelTwo>The “SmileStorage Center” furniture was designed as part of a custom furniture project for a dental office. Its primary goal was to address the specific storage needs of a dental environment, providing an efficient and aesthetically pleasing solution.</LabelTwo>
                <LabelTwo>The furniture was designed with organization and accessibility in mind. It has specific compartments to store dental instruments, hygiene products, sterilization materials and protective equipment. Drawers glide smoothly, and soft-close doors ensure easy access to essential supplies.</LabelTwo>
              </ContFive>
              <ContSix>
                <LabelThree>Designed with</LabelThree>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup" />
                  <Icon src={vray} alt="vray" />
                  <Icon src={illustrator} alt="illustrator" />
                </div>
              </ContSix>
            </ContFour>
          </div>
        </div>
      </ContOne>
    </SecOne>
  )
}

export default FurnThreeSeccOne