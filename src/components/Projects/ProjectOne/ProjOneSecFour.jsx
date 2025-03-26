import React from 'react';
import styled from 'styled-components';
import four from '../../../assets/images/projectone/four.jpg';

const SeccFour = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 3.5rem 0 1.25rem;
  }
`;

const Cont = styled.div`
  width: 52%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Contwo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {

  }
`;

const Img = styled.img`
  width: 100%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {

  }
`;

const Label = styled.span`
  position: absolute;
  bottom: -2rem;
  right: 0;
  text-transform: uppercase;
  color: var(--quaternary-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.98px) {
    bottom: -1.5rem;
  }
`;


const ProjOneSecFour = () => {
  return (
    <SeccFour>
      <Cont className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Contwo>
              <Img src={four} alt="Render four" />
              <Label>Floor plan view</Label>
            </Contwo>
          </div>
        </div>
      </Cont>
    </SeccFour>
  );
};

export default ProjOneSecFour;
