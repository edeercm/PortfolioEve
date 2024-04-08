import React from 'react';
import styled from 'styled-components';
import four from '../../../assets/images/projectone/four.jpg';
import { Label } from './Proj1GlobalStls';

const SecTwo = styled.section`
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
  }
`;

const ImgCont = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const Proj1Sec2 = () => {
  return (
    <SecTwo>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ImgCont>
              <img src={four} alt="Render four" />
              <Label>Floor plan view</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Proj1Sec2;
