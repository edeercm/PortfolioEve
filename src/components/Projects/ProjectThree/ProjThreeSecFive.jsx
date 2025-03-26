import React from 'react'
import styled from 'styled-components';
import five01 from '../../../assets/images/projecthree/five01.png'
import five02 from '../../../assets/images/projecthree/five02.png'
import five03 from '../../../assets/images/projecthree/five03.png'

const Seccfive = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 1.75rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 1.5rem 0;
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

const Massage = styled.h4`
  letter-spacing: 0.175rem;
`;

const Contwo = styled.div`
  position: relative;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    /* height: auto;
    padding: 6.5rem 0; */
  }

  @media (max-width: 575.98px) {
    height: 50vh;
  }
`;

const Leftimg = styled.img`
  position: absolute;
  width: 25%;
  top: 28%;
  left: 7.775%;
  transform: translateY(-50%);
  z-index: 2;
`;

const Centerimg = styled.img`
  width: 40%;
  z-index: 1;
`;

const Rightimg = styled.img`
  position: absolute;
  width: 30%;
  top: 77%;
  right: 10.5%;
  transform: translateY(-50%);
  z-index: 2;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

`;

const ProjThreeSecFive = () => {
  return (
    <Seccfive>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className='position-relative'>
              <Contone>
                <Moodboard>Moodboard</Moodboard>
                <Massage>Massage parlor</Massage>
              </Contone>
            </div>
            <Contwo>
              <div className='position-relative d-flex justify-content-center'>
                <Leftimg src={five02} alt="" />
                <Centerimg src={five01} alt="" />
                <Rightimg src={five03} alt="" />
              </div>
            </Contwo>
            <div className='position-relative'>
              <div className='position-absolute end-0 bottom-0 text-end'>
                <div className='d-flex flex-column gap-2'>
                  <h5>Color palette</h5>
                  <div className='d-flex flex-row gap-2'>
                    <Circle style={{ backgroundColor: '#DFD3CE' }}></Circle>
                    <Circle style={{ backgroundColor: '#C1B8B3' }}></Circle>
                    <Circle style={{ backgroundColor: '#B59C83' }}></Circle>
                    <Circle style={{ backgroundColor: '#65554A' }}></Circle>
                    <Circle style={{ backgroundColor: '#E6C2BF' }}></Circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Seccfive>
  )
}

export default ProjThreeSecFive