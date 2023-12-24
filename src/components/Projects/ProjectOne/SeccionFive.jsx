import React from 'react'
import styled from 'styled-components';
import five01 from '../../../assets/images/projectone/five.jpg'
import five02 from '../../../assets/images/projectone/five01.jpg'

const SeccFive = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 1.75rem 0;
  }
`;

const Contone = styled.section`
  display: flex;
  flex-direction: column;
  text-align: end;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }
`;


const Label = styled.span`
  text-transform: uppercase;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }
`;


const SeccionFive = () => {
  return (
    <SeccFive>
      <div className="container=sm container-md container-lg container-xl container-xxl">
        <div className="row gap-4 gap-md-5 gap-lg-0 gap-xl-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Contone>
              <Img src={five01} alt="Render five-1" />
              <Label>Interior view of central courtyard</Label>
            </Contone>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Contone>
              <Img src={five02} alt="Render five-2" />
              <Label>Interior view of central courtyard</Label>
            </Contone>
          </div>
        </div>
      </div>
    </SeccFive>
  );
};

export default SeccionFive 