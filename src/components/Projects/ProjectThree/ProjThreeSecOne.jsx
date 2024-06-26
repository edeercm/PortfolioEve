import React from 'react'
import styled from 'styled-components';
import one from '../../../assets/images/projecthree/one.png'
import autocad from '../../../assets/images/icons/autocad.png'
import sketchup from '../../../assets/images/icons/sketchup.png'
import vray from '../../../assets/images/icons/vray.png'
import photoshop from '../../../assets/images/icons/photoshop.png'
import { Imgcont, Conthree, Label, Labeltwo, Contfour, Labelthree, Icon } from '../SecOneGlobalStyles';

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
    padding: 6.5rem 0 4rem;
  }
`;

const Img = styled.img`
  width: 95%;
  object-fit: contain;
  object-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Namecont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  right: 3rem;
  bottom: 0.5rem;

  h3, h4 {
    color: var( --tertiary-color);
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    right: 0.5rem;
    bottom: 0.25rem;
  }
`;

const Number = styled.h3`
  font-size: 3rem;
`;

const Title = styled.h4`
  line-height: 0.75;
  font-size: 1.575rem;
`;

const Subtitle = styled.h4`
  font-size: 1.575rem;
`;

const Contwo = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin: 2rem 0 -10.75rem;
    width: 100%;
  }

  @media (max-width: 575.98px) {
    margin-top: 2rem;
    width: 95%;
  }
`;

const ProjThreeSecOne = () => {
  return (
    <SecOne>
      <div className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-7 col-xl-7 gx-0 gx-lg-5 gx-xl-5">
            <Imgcont>
              <Img src={one} alt="Proj one" />
              <Namecont>
                <Number>03</Number>
                <Title>LUNA & MAR</Title>
                <Subtitle>SPA</Subtitle>
              </Namecont>
            </Imgcont>
          </div>
          <div className="col-md-12 col-lg-5 col-xl-5 d-flex justify-content-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-center ">
            <Contwo>
              <Conthree>
                <Label>Description</Label>
                <Labeltwo>Strategically located in Puerto Escondido, "Luna&Mar" seamlessly blends into its surroundings. The architectural and interior design successfully merges modernity with serenity. This holistic sanctuary not only provides a wellness escape but also reflects an intrinsic connection with the surrounding nature, thus establishing a harmonious balance between contemporary design and the holistic essence of the spa.</Labeltwo>
                <Labeltwo>The color palette consists of soothing tones of blues, greens, and neutrals, inspired by the hues of the surrounding nature. These colors are incorporated into the walls and furniture selection to create an atmosphere of tranquility and harmony.</Labeltwo>
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
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default ProjThreeSecOne