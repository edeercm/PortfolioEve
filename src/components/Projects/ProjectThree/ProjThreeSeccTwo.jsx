import React from 'react'
import styled from 'styled-components';
import two01 from '../../../assets/images/projecthree/two01.png'
import two02 from '../../../assets/images/projecthree/two02.png'

const Secctwo = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 10rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    /* padding: 10rem 0; */
  }
`;

const Img = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: contain;
    object-position: center;
`;

const Cont = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 1.5rem;
    bottom: -2rem;
  }

  @media (max-width: 575.98px) {
    right: 3rem;
    bottom: -1.75rem;
  }
`;

const Desc = styled.span`
  color: #4B4B4B;
  text-transform: uppercase;
`;

const ProjThreeSeccTwo = () => {
  return (
    <Secctwo>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row gap-5 gap-md-0 gap-lg-0 gap-xl-0">
          <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <Img src={two01} alt="Render two" />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <Img src={two02} alt="Render three" />
          </div>
        </div>
        <div className='position-relative'>
          <Cont>
            <Desc>floor plan view</Desc>
          </Cont>
        </div>
      </div>
    </Secctwo>

  );
};

export default ProjThreeSeccTwo