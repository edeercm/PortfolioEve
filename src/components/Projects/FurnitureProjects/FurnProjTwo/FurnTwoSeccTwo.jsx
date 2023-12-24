import React from 'react'
import styled from 'styled-components'
import two from '../../../../assets/images/projectfour/FurnitureTwo/two.png'
import three from '../../../../assets/images/projectfour/FurnitureTwo/three.png'

const Secctwo = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 0;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 5rem 0;
  }
`;

const Imgone = styled.img`
  width: 85%;
  

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Imgdesc = styled.h4`
  position: absolute;
  right: 15%;
  bottom: -4.25rem;
  text-align: end;

  @media (max-width: 575.97px) {
    right: 0;
  }
`;

const Imgtwo = styled.img`
  width: 60%;
  object-fit: contain;
  object-position: center;
  z-index: 1;

  @media (max-width: 575.97px) {
    margin-top: 6rem;
    width: 70%;
  }
`;

const Artone = styled.article`
  position: absolute;
  top: 71%;
  left: 12%;
  z-index: 5;

  @media (max-width: 575.97px) {
    top: 73.5%;
    left: 16%;
  }
`;

const Artwo = styled.article`
  position: absolute;
  top: 87.5%;
  left: 40.75%;
  z-index: 5;

  @media (max-width: 575.97px) {
   top: 90%;
    left: 45%;
  }
`;

const Arthree = styled.article`
  position: absolute;
  top: 50%;
  right: 3%;
  /* text-align: end; */
  z-index: 5;

  @media (max-width: 575.97px) {
    top: 60%;
    right: 0;
  }
`;

const Artdesc = styled.span`
  color: var(--quaternary-color);
`;

const Lineone = styled.div`
  width: 10rem;
  height: 0.15rem;
  background-color: black;

  @media (max-width: 575.97px) {
    width: 5rem;
  }
`;

const Linetwo = styled.div`
  width: 7.5rem;
  height: 0.15rem;
  background-color: black;
`;

const FurnTwoSeccTwo = () => {
  return (
    <Secctwo>
      <div className="container-md container-lg container-xl container-xxl">
        <div className="row gap-md-5 gap-lg-0 gap-xl-0">
          <div className="col-md-12 col-lg-6 col-xl-6" >
            <div className='position-relative d-flex flex-column align-items-md-center align-items-lg-start align-items-xl-start text-center'>
              <Imgone src={two} alt="Render-two" />
              <Imgdesc>VISUALIZATION <br /> OF THE COMPARTMENTS</Imgdesc>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex align-items-center mt-md-5 mt-lg-0 mt-xl-0">
            <div className='position-relative'>
              <div className='position-relative d-flex justify-content-center'>
                <Imgtwo src={three} alt="Render-three" />
              </div>
              <Artone>
                <Artdesc style={{ marginLeft: '-3.5rem' }}>Parota wood</Artdesc>
                <Lineone />
              </Artone>
              <Artwo>
                <Artdesc style={{ marginLeft: '-3rem' }}>Vision color</Artdesc>
                <Lineone />
              </Artwo>
              <Arthree>
                <Artdesc style={{ marginLeft: '3.65rem' }}>Scented candles</Artdesc>
                <Linetwo />
              </Arthree>
            </div>
          </div>
        </div>
      </div>
    </Secctwo>
  )
}

export default FurnTwoSeccTwo