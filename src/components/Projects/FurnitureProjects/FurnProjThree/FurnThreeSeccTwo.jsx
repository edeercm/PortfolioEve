import React from 'react'
import styled from 'styled-components'
import two from '../../../../assets/images/projectfour/FurnitureThree/two.png'
import three from '../../../../assets/images/projectfour/FurnitureThree/three.png'

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

  width: 95%;
  
  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Imgdesc = styled.h4`
  position: absolute;
  right: 0;
  bottom: -4.5rem;
  text-align: end;
`;

const Imgtwo = styled.img`
  margin-right: 1.5rem;
  width: 37.5%;
  object-fit: contain;
  object-position: center;
  z-index: 1;

  @media (max-width: 575.97px) {
    margin-left: 10rem;
    margin-top: 7.5rem;
    width: 50%;
  }

`;

const Artone = styled.article`
  position: absolute;
  top: 50%;
  left: 40%;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 50%;
    left: 15%;
  }

  @media (max-width: 575.97px) {
    top: 65%;
    left: 25%;
  }
`;

const Artwo = styled.article`
  position: absolute;
  top: 74%;
  left: 45%;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 74%;
    left: 60%;
    text-align: end;
  }

  @media (max-width: 575.97px) {
    top: 81.75%;
    left: 35%;
  }
`;

const Arthree = styled.article`
  position: absolute;
  top: 90%;
  left: 40%;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 90%;
    left: 20%;
  }

  @media (max-width: 575.97px) {
    top: 91%;
    left: 25%;
  }
`;

const Artdesc = styled.span`
  color: var(--quaternary-color);
`;

const Artdesctwo = styled.span`
  color: var(--quaternary-color);
  margin-left: -7rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-right: -5rem;
  }
`;

const Lineone = styled.div`
  width: 10rem;
  height: 0.15rem;
  background-color: black;

  @media (max-width: 575.97px) {
    width: 7.5rem;
  }
`;


const FurnThreeSeccTwo = () => {
  return (
    <Secctwo>
      <div className="container-md container-lg container-xl container-xxl">
        <div className="row gap-md-5 gap-lg-0 gap-xl-0">
          <div className="col-md-12 col-lg-6 col-xl-6" >
            <div className='position-relative d-flex flex-column align-items-center text-center'>
              <Imgone src={two} alt="Render-two" />
              <Imgdesc>VISUALIZATION <br /> OF THE COMPARTMENTS</Imgdesc>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 d-flex align-items-center mt-md-5 mt-lg-0 mt-xl-0">
            <div className='position-relative'>
              <div className='position-relative d-flex justify-content-md-center justify-content-lg-end justify-content-xl-end'>
                <Imgtwo src={three} alt="Render-three" />
              </div>
              <Artone>
                <Artdesc style={{ marginLeft: '-1.75rem' }}>Granite</Artdesc>
                <Lineone />
              </Artone>
              <Artwo>
                <Artdesctwo>Jocoque color melamine</Artdesctwo>
                <Lineone />
              </Artwo>
              <Arthree>
                <Artdesc style={{ marginLeft: '-4.5rem' }}>Fresnedo color</Artdesc>
                <Lineone />
              </Arthree>
            </div>
          </div>
        </div>
      </div>
    </Secctwo>
  )
}

export default FurnThreeSeccTwo