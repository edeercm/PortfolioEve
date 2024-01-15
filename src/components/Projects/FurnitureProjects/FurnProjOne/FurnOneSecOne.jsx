import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureOne/one.png'
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
    padding: 5rem 0 0;
  }
`;

const ContThree = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  bottom: -0.25rem;
  right: -3.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    bottom: 2.25rem;
    right: 0;
  }

  @media (max-width: 575.97px) {
    right: 0rem;
    bottom: -2.5rem;
  }

  
`;

const ContFour = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 2.5rem;
    width: 90%;
  }

  @media (max-width: 575.97px) {
    margin-top: 4.25rem;
    width: 100%;
  }  
`;

const FurnOneSeccOne = () => {
  return (
    <SecOne>
      <ContOne className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <ConTwo>
              <Img src={one} alt="Render-one" />
              <ContThree>
                <Number>01</Number>
                <Title>Mesa Casa 20 Nov</Title>
              </ContThree>
            </ConTwo>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <ContFour>
              <ContFive>
                <LabelOne>Description</LabelOne>
                <LabelTwo>The coffee table was designed as part of an interior design project for a luxury living room. Its main purpose is to serve as an aesthetic and functional focal point, combining the beauty of parota wood with the elegance of brass and the transparency of smoked glass.</LabelTwo>
                <LabelTwo>The inspiration came from the idea of merging natural materials with contemporary elements. The concept focuses on the harmony between parota wood, brass, and smoked glass to create a unique and appealing furniture piece.</LabelTwo>
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

export default FurnOneSeccOne