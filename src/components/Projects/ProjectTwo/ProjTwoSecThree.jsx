import React from 'react';
import styled from 'styled-components';
import three01 from '../../../assets/images/projectwo/three01.png'
import three02 from '../../../assets/images/projectwo/three02.png'

const SeccThree = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #E9E5DE;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 4rem 0 1.75rem;
  }
`;

const Contone = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  text-transform: uppercase;
  gap: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
    text-align: start;
  }
`;

const Img = styled.img`
  width: 100%;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }
`;

const ProjTwoSecThree = () => {
  return (
    <SeccThree>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row gap-4 gap-md-5 gap-lg-0 gap-xl-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Contone>
              <Img src={three01} alt="Render-three" />
              <span>Interior view of dining room</span>
            </Contone>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Contone>
              <Img src={three02} alt="Render-three" />
              <span>Exterior view</span>
            </Contone>
          </div>
        </div>
      </div>
    </SeccThree>
  );
};

export default ProjTwoSecThree;
