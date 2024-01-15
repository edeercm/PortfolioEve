import React from 'react'
import styled from 'styled-components'
import two from '../../../../assets/images/projectfour/FurnitureOne/two.png'
import three from '../../../../assets/images/projectfour/FurnitureOne/three.png'

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
    padding: 5rem 0 0;
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
  right: 3.95rem;
  bottom: -2.75rem;
`;

const Imgtwo = styled.img`
  width: 45%;
  z-index: 1;

  @media (max-width: 575.97px) {
    margin-top: 5rem;
    width: 70%;
  }
`;

const Artone = styled.article`
  position: absolute;
  top: 23%;
  left: 15%;
  z-index: 5;

  @media (max-width: 575.97px) {
    top: 35%;
    left: 49%;
  }
`;

const Artwo = styled.article`
  position: absolute;
  top: 59.5%;
  left: 17%;
  z-index: 5;

  @media (max-width: 575.97px) {
    top: 67%;
    left: 9.25%;
  }
`;

const Arthree = styled.article`
  position: absolute;
  top: 84%;
  right: 15%;
  text-align: end;
  z-index: 5;

  @media (max-width: 575.97px) {
    top: 86%;
    right: 13.75%;
  }
`;

const Artdesc = styled.span`
  color: var(--quaternary-color);
`;

const Artdesctwo = styled.span`
  color: var(--quaternary-color);
  margin-left: -3.5rem;

  @media (max-width: 575.97px) {
    margin-inline-start: 4.5rem;
  }
`;

const Lineone = styled.div`
  width: 12.5rem;
  height: 0.15rem;
  background-color: black;

  @media (max-width: 575.97px) {
    width: 8.75rem;
  }
`;

const Linetwo = styled.div`
  width: 7.5rem;
  height: 0.15rem;
  background-color: black;
`;

const FurnOneSeccTwo = () => {
  return (
    <Secctwo>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <div className="row gap-md-5 gap-lg-0 gap-xl-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
            <div className='position-relative d-flex flex-column align-items-center'>
              <Imgone src={two} alt="Render-two" />
              <Imgdesc>3D VISUALIZATION</Imgdesc>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center mt-md-5 mt-lg-0 mt-xl-0">
            <div className='position-relative'>
              <div className='position-relative d-flex justify-content-center'>
                <Imgtwo src={three} alt="Render-three" />
              </div>
              <Artone>
                <Artdesctwo >Parota wood</Artdesctwo>
                <Linetwo />
              </Artone>
              <Artwo>
                <Artdesc style={{ marginLeft: '-1.65rem' }}>Brass</Artdesc>
                <Lineone />
              </Artwo>
              <Arthree>
                <Artdesc style={{ marginRight: '-2.55rem' }}>Smoked glass</Artdesc>
                <Linetwo />
              </Arthree>
            </div>
          </div>
        </div>
      </div>
    </Secctwo>
  )
}

export default FurnOneSeccTwo