import React from 'react'
import styled from 'styled-components';
import four from '../../../assets/images/projecthree/four.png'

const Seccfour = styled.section`
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
    padding: 0;
  }
`;

const Cont = styled.div`
  position: relative;
  width: 85%;
  display: flex;
  flex-direction: column;
  text-align: end;
  text-transform: uppercase;
  gap: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  
  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  } */

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;


const ProjThreeSeccFour = () => {
  return (
    <Seccfour>
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center">
            <Cont>
              <Img src={four} alt="Four-img" />
              <span>Reception interior view</span>
            </Cont>
          </div>
        </div>
      </div>
    </Seccfour>
  )
}

export default ProjThreeSeccFour