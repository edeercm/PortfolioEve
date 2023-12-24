import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureThree/one.png'
import autocad from '../../../../assets/images/icons/autocad.png'
import sketchup from '../../../../assets/images/icons/sketchup.png'
import vray from '../../../../assets/images/icons/vray.png'
import illustrator from '../../../../assets/images/icons/illustrator.png'

const Seccone = styled.section`
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

const Contone = styled.div`
  width: 85%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Contwo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  } */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  } */
`;

const Conthree = styled.div`
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
    bottom: -1.75rem;
  }
`;

const Number = styled.h3`
  font-size: 3.25rem;
  color: #4B4B4B;
`;

const Title = styled.h4`
  line-height: 0.75;
  font-size: 1.575rem;
`;

const Contfour = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 5rem;
    width: 90%;
  }

  @media (max-width: 575.97px) {
    margin-top: 5rem;
    width: 100%;
  }
`;

const Contfive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1.25rem;
    

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  } */
`;

const Desctitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: #4B4B4B;
  font-weight: bold;
  letter-spacing: 0.15rem;
`;

const Projdesc = styled.span`
  color: #4B4B4B;
  font-size: 0.915rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.125rem;
  }
`;

const Contsix = styled.div`
  margin-top: 0.75rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const Designed = styled.h4`
  color: #4B4B4B;
  font-style: italic;
  font-size: 1.25rem;
`;

const Icon = styled.img`
  width: 12.25%;

  @media (max-width: 575.97px) {
    width: 15.75%;
  }
`;

const FurnThreeSeccOne = () => {
  return (
    <Seccone>
      <Contone className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6">
            <Contwo>
              <Img src={one} alt="Render-one" />
              <Conthree>
                <Number>03</Number>
                <Title>SmileStorage Center</Title>
              </Conthree>
            </Contwo>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <Contfour>
              <Contfive>
                <Desctitle>Description</Desctitle>
                <Projdesc>The “SmileStorage Center” furniture was designed as part of a custom furniture project for a dental office. Its primary goal was to address the specific storage needs of a dental environment, providing an efficient and aesthetically pleasing solution.</Projdesc>
                <Projdesc>The furniture was designed with organization and accessibility in mind. It has specific compartments to store dental instruments, hygiene products, sterilization materials and protective equipment. Drawers glide smoothly, and soft-close doors ensure easy access to essential supplies.</Projdesc>
              </Contfive>
              <Contsix>
                <Designed>Designed with</Designed>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup" />
                  <Icon src={vray} alt="vray" />
                  <Icon src={illustrator} alt="illustrator" />
                </div>
              </Contsix>
            </Contfour>
          </div>
        </div>
      </Contone>
    </Seccone>
  )
}

export default FurnThreeSeccOne