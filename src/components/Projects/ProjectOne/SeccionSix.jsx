import React from 'react';
import styled from 'styled-components';
import six from '../../../assets/images/projectone/six.png';

const SeccSix = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 3.5rem 0 5rem;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 0 0 3.5rem;
  }
`;

const Contone = styled.div`
  width: 72%;

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
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Label = styled.span`
  position: absolute;
  bottom: -2rem;
  right: 0;
  text-transform: uppercase;
  color: var(--quaternary-color);

  @media (max-width: 575.98px) {
    bottom: -1.5rem;
  }
`;

const SeccionSix = () => {
  return (
    <SeccSix>
      <Contone className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Contwo>
              <Img src={six} alt="Render six" />
              <Label>Interior view of workshop</Label>
            </Contwo>
          </div>
        </div>
      </Contone>
    </SeccSix>
  );
};

export default SeccionSix;

