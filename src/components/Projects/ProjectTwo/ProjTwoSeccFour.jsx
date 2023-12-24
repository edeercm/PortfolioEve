import React from 'react';
import styled from 'styled-components';
import four from '../../../assets/images/projectwo/four.png'

const SeccFour = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 3rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 0 0 1.75rem;
  }
`;

const Contone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; 
  text-align: end;
  text-transform: uppercase;
  gap: 0.5rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const Img = styled.img`
  width: 100%;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }
`;

const SeccionFourComponent = () => {
  return (
    <SeccFour>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Contone>
              <Img src={four} alt="Render four" />
              <span>cropped view</span>
            </Contone>
          </div>
        </div>
      </div>
    </SeccFour>
  );
};

export default SeccionFourComponent;
