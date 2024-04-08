import React from 'react';
import styled from 'styled-components';
import six from '../../../assets/images/projectone/six.png';
import { Label } from './Proj1GlobalStls';

const SecFour = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 991.98px) {
    height: auto;
    padding: 0 0 1.25rem;
  }
`;

const ImgCont = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const Proj1Sec4 = () => {
  return (
    <SecFour>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ImgCont>
              <img src={six} alt="Render" />
              <Label>Interior view of workshop</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Proj1Sec4;

