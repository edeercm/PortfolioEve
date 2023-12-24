import React from 'react'
import styled from 'styled-components'
import one from '../../../../assets/images/projectfour/FurnitureTwo/one.png'
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
  height: 80vh;
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  object-position: center;

`;

const Conthree = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    right: -5.5rem;
    bottom: 0.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 0.25rem;
    bottom: -4.25rem;
  }

  @media (max-width: 575.97px) {
    right: 0.25rem;
    bottom: 3rem;
  }
`;

const Number = styled.h3`
  font-size: 3.25rem;
  color: var(--quaternary-color);
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
    margin-top: 3rem;
    width: 90%;
  }

  @media (max-width: 575.97px) {
    margin-top: 1.25rem;
    width: 100%;
  }
`;

const Contfive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1.25rem;
`;

const Desctitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: var(--quaternary-color);
  font-weight: bold;
  letter-spacing: 0.15rem;
`;

const Projdesc = styled.span`
  color: var(--quaternary-color);
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
  color: var(--quaternary-color);
  font-style: italic;
  font-size: 1.25rem;
`;

const Icon = styled.img`
  width: 12.25%;

  @media (max-width: 575.97px) {
    width: 15.75%;
  }
`;

const FurnTwoSeccOne = () => {
  return (
    <Seccone>
      <Contone className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-6">
            <Contwo>
              <Img src={one} alt="Render-one" />
              <Conthree>
                <Number>02</Number>
                <Title>Arbórea</Title>
              </Conthree>
            </Contwo>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end align-items-center">
            <Contfour>
              <Contfive>
                <Desctitle>Description</Desctitle>
                <Projdesc>The 'Arbórea' TV furniture was designed as part of an interior design project for a living room. The main purpose of this furniture is to provide a stylized and functional solution for organizing entertainment equipment and to serve as a focal point in the room.</Projdesc>
                <Projdesc>The concept focused on highlighting the warmth and richness of this material in a modern and elegant design that brings a sense of connection with nature to the interior space.</Projdesc>
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

export default FurnTwoSeccOne