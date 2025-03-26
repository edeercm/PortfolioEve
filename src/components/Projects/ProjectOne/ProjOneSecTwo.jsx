import React from 'react';
import styled from 'styled-components';
import two from '../../../assets/images/projectone/two.png';

const SeccTwo = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 3.5rem 0 0;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;


  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }
`;

const ProjOneSecOne = () => {
  return (
    <SeccTwo>
      <div className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
            <Img src={two} alt="Render two" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex align-items-end justify-content-center">
            <div className='d-flex flex-column text-uppercase'>
              <span>Cross-section c-c'</span>
              <span>Architectural</span>
            </div>
          </div>
        </div>
      </div>
    </SeccTwo>
  );
};

export default ProjOneSecOne;
