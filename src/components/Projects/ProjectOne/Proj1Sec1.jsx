import React from 'react'
import styled from 'styled-components';
import Sec1Img from './Sec1Img';
import Sec1Desc from './Sec1Desc';

const SecOne = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 7.5rem 0 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 6.25rem 0 4rem;
  }
`;

const Proj1Sec1 = () => {
  return (
    <SecOne>
      <div className="container">
        <div className="row gap-4 gap-md-5 gap-lg-0">
          <div className="col-12 col-lg-6">
            <Sec1Img />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end align-items-center">
            <Sec1Desc />
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Proj1Sec1
