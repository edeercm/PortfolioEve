import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projecthree/one.png'
import autocad from '../../../assets/images/icons/autocad.png'
import sketchup from '../../../assets/images/icons/sketchup.png'
import vray from '../../../assets/images/icons/vray.png'
import photoshop from '../../../assets/images/icons/photoshop.png'
import '../../Projects/SeccionOneGlobalStyles.css'

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

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.5rem 0 4rem;
  }
`;

const Contone = styled.div`
  width: 82.5%;

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
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Namecont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: 0.5rem;
  bottom: 0.5rem;

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    bottom: -3.5rem;
    right: 0.5rem;
  } */
`;

const Projnumber = styled.h3`
  color: #DFD3CE;
  font-size: 2.75rem;

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {

  } */
`;

const Projtitle = styled.h4`
  color: #DFD3CE;
  line-height: 0.75;
  font-size: 1.575rem;
`;

const Projsubtitle = styled.h4`
  color: #DFD3CE;
  font-size: 1.575rem;
`;

const Contwo = styled.div`
  width: 93.5%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin: 4rem 0 -10.75rem;
    width: 100%;
  }

  @media (max-width: 575.98px) {
    margin-top: 3rem;
    width: 95%;
  }
`;

const Descont = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 0.875rem;
`;

const Desctitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: #4B4B4B;
  font-weight: bold;
  font-size: 1.575rem;
  letter-spacing: 0.15rem;
`;

const Descinfo = styled.span`
  color: #4B4B4B;
  font-size: 0.925rem;
`;

const Iconscont = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const Iconstitle = styled.h4`
  font-style: italic;
  font-size: 1.125rem;
  color: var(--quaternary-color);

  @media (max-width: 575.98px) {
    font-size: 1.25rem;
  }

`;

const Icon = styled.img`
  width: 12.5%;

  @media (max-width: 575.98px) {
    width: 17.5%;
  }
`;

const ProjThreeSeccOne = () => {
  return (
    <Seccone>
      <Contone className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-7 col-xl-7 gx-0 gx-lg-5 gx-xl-5">
            <Imgcont>
              <Img src={one} alt="Proj one" />
              <Namecont>
                <Projnumber>03</Projnumber>
                <Projtitle>LUNA & MAR</Projtitle>
                <Projsubtitle>SPA</Projsubtitle>
              </Namecont>
            </Imgcont>
          </div>
          <div className="col-md-12 col-lg-5 col-xl-5 d-flex justify-content-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-center ">
            <Contwo>
              <Descont>
                <Desctitle>Description</Desctitle>
                <Descinfo>San Bruno has been characterized as a neighborhood with numerous social and environmental issues, coupled with a lack of access to recreational and cultural activities, nearby healthcare services, and areas designated for sports activities.</Descinfo>
                <Descinfo>The purpose of the project is to generate a restoration proposal, to commemorate and contrast with what has already been built, creating spaces that foster social interaction and applying the concept of multifunctionality to the design of these spaces.</Descinfo>
                <Descinfo>This aims to demonstrate that it's possible to develop high-quality architecture in the marginalized sectors of the city.</Descinfo>
              </Descont>
              <Iconscont>
                <Iconstitle>Designed with</Iconstitle>
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Icon src={autocad} alt="autocad" />
                  <Icon src={sketchup} alt="sketchup" />
                  <Icon src={vray} alt="vray" />
                  <Icon src={photoshop} alt="photoshop" />
                </div>
              </Iconscont>
            </Contwo>
          </div>
        </div>
      </Contone>
    </Seccone>
  );
};

export default ProjThreeSeccOne