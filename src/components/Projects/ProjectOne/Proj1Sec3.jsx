import React from 'react'
import styled from 'styled-components';
import imgone from '../../../assets/images/projectone/five.jpg'
import imgtwo from '../../../assets/images/projectone/five01.jpg'
import { Label } from './Proj1GlobalStls';

const SecThree = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 0 0 5rem;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 2.5rem 0;
  }
`;

const ImgCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 0.5rem;
  
  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

const Proj1Sec3 = () => {
  return (
    <SecThree>
      <div className="container">
        <div className="row gap-5 gap-lg-0">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <ImgCont>
              <img src={imgone} alt="Render" />
              <Label>Interior view of central courtyard</Label>
            </ImgCont>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <ImgCont>
              <img src={imgtwo} alt="Render" />
              <Label>Interior view of central courtyard</Label>
            </ImgCont>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Proj1Sec3 