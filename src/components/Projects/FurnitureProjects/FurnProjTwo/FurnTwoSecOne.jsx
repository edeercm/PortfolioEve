import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureTwo/one.png'
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
  right: -6.5rem;
  bottom: 0.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 0.25rem;
    bottom: -4.25rem;
  }

  @media (max-width: 575.97px) {
    right: 0.25rem;
    bottom: -5rem;
  }
`;

const ContFour = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 3rem;
    width: 90%;
  }

  @media (max-width: 575.97px) {
    margin-top: 6.125rem;
    width: 100%;
  }
`;

const FurnTwoSeccOne = () => {
  return (
    <SecOne>
      <ContOne className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6">
            <ConTwo>
              <Img src={one} alt="Render-one" />
              <ContThree>
                <Number>02</Number>
                <Title>Arbórea</Title>
              </ContThree>
            </ConTwo>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <ContFour>
              <ContFive>
                <LabelOne>Description</LabelOne>
                <LabelTwo>The 'Arbórea' TV furniture was designed as part of an interior design project for a living room. The main purpose of this furniture is to provide a stylized and functional solution for organizing entertainment equipment and to serve as a focal point in the room.</LabelTwo>
                <LabelTwo>The concept focused on highlighting the warmth and richness of this material in a modern and elegant design that brings a sense of connection with nature to the interior space.</LabelTwo>
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

export default FurnTwoSeccOne