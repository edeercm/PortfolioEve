import React from 'react'
import styled from 'styled-components';
import three01 from '../../../assets/images/projecthree/three01.png'
import three02 from '../../../assets/images/projecthree/three02.png'
import three03 from '../../../assets/images/projecthree/three03.png'

const Seccthree = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 2rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 5rem 0;
    
  }
`;

const Contone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`;

const Moodboard = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: bold;
`;

const Reception = styled.h4`
  letter-spacing: 0.325rem;
`;

const Contwo = styled.div`
  position: relative;
  height: 75vh;
  display: flex;
  align-items: center;

  @media (max-width: 575.98px) {
    height: 50vh;
  }

`;

const Leftimg = styled.img`
  position: absolute;
  width: 40%;
  top: 66.25%;
  left: 7.775%;
  transform: translateY(-50%);
  z-index: 2;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
    left: 0;
  }

  @media (max-width: 575.98px) {
    width: 50%;
    left: 1.75%;
  }
`;

const Centerimg = styled.img`
  width: 40%;
  z-index: 1;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 57.5%;
  }

  @media (max-width: 575.98px) {
    width: 60%;
  }
`;

const Rightimg = styled.img`
  position: absolute;
  width: 15%;
  top: 11%;
  right: 18.5%;
  transform: translateY(-50%);
  z-index: 2;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 25%;
    right: 0;
  }

  @media (max-width: 575.98px) {
    width: 25%;
    right: 0%;
  }
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

`;

const ProjThreeSeccThree = () => {
  return (
    <Seccthree>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className='position-relative'>
              <Contone>
                <Moodboard>Moodboard</Moodboard>
                <Reception>Reception</Reception>
              </Contone>
            </div>
            <Contwo>
              <div className='position-relative d-flex justify-content-center'>
                <Leftimg src={three02} alt="Left-img" />
                <Centerimg src={three01} alt="Center-img" />
                <Rightimg src={three03} alt="Right-img" />
              </div>
            </Contwo>
            <div className='position-relative'>
              <div className='position-absolute end-0 bottom-0 text-end'>
                <div className='d-flex flex-column gap-2'>
                  <h5>Color palette</h5>
                  <div className='d-flex flex-row gap-2'>
                    <Circle style={{ backgroundColor: '#755020' }}></Circle>
                    <Circle style={{ backgroundColor: '#BCB29E' }}></Circle>
                    <Circle style={{ backgroundColor: '#909986' }}></Circle>
                    <Circle style={{ backgroundColor: '#93A9D1' }}></Circle>
                    <Circle style={{ backgroundColor: '#0F4C81' }}></Circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Seccthree>
  )
}

export default ProjThreeSeccThree