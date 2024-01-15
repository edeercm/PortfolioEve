import React from 'react'
import styled from 'styled-components';
import six from '../../../assets/images/projecthree/six.png'

const Seccsix = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5.75rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 2.5rem 0 3rem;
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
`;


const ProjThreeSecSix = () => {
  return (
    <Seccsix>
      <div className="container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Cont>
              <Img src={six} alt="Six-img" />
              <span>Interior view of the massage room.</span>
            </Cont>
          </div>
        </div>
      </div>
    </Seccsix>
  )
}

export default ProjThreeSecSix