import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureFour/one.png'
import autocad from '../../../../assets/images/icons/autocad.png'
import sketchup from '../../../../assets/images/icons/sketchup.png'
import vray from '../../../../assets/images/icons/vray.png'
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
    bottom: 0;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 0;
    bottom: -1rem;
  }

  @media (max-width: 575.97px) {
    right: 0;
    bottom: -3rem;
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
    margin-top: 4.5rem;
    width: 100%;
  }
`;

const FurnFourSeccOne = () => {
  return (
    <SecOne>
      <ContOne className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6">
              <ConTwo>
                <Img src={one} alt="Render-one" />
                <ContThree>
                  <Number>04</Number>
                  <Title>Closet T&G</Title>
                </ContThree>
              </ConTwo>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <ContFour>
              <ContFive>
                <LabelOne>Description</LabelOne>
                <LabelTwo>Closet T&G was designed as part of an interior design project for a master bedroom. Its main purpose is to offer a functional and stylish storage solution that seamlessly integrates into the space and meets the client's requirements.</LabelTwo>
                <LabelTwo>The inspiration behind it stemmed from the idea of creating a storage space that reflects light and elegance. The concept focuses on using parota wood in a light manner and opting for a clear color to provide a sense of spaciousness and luminosity to the bedroom.</LabelTwo>
              </ContFive>
              <ContSix>
                <LabelThree>Designed with</LabelThree>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup"  />
                  <Icon src={vray} alt="vray" />
                </div>
              </ContSix>
            </ContFour>
          </div>
        </div>
      </ContOne>
    </SecOne>
  )
}

export default FurnFourSeccOne