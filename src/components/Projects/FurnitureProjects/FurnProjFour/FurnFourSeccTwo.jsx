import React from 'react'
import styled from 'styled-components'
import two from '../../../../assets/images/projectfour/FurnitureFour/two.png'
import three from '../../../../assets/images/projectfour/FurnitureFour/three.png'

const Secctwo = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 0 0 6.5rem;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 5rem 0;
  }
`;

const Imgone = styled.img`
  width: 100%;
  
`;

const Imgdesc = styled.h4`
  position: absolute;
  right: 0;
  bottom: -2.75rem;
  text-align: end;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    bottom: -1.25rem;
  }
`;

const Imgtwo = styled.img`
  margin-left: 7.75rem;
  width: 30%;
  object-fit: contain;
  object-position: center;
  z-index: 1;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-left: 4rem;
  }

  @media (max-width: 575.97px) {
    margin: 7.5rem 0 0 0;
    width: 40%;
  }

`;

const Artone = styled.article`
  position: absolute;
  top: 47%;
  left: 25%;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    left: 21.75%;
  }

  @media (max-width: 575.97px) {
    top: 60%;
    left: 20%;
  }
  
`;

const Artwo = styled.article`
  position: absolute;
  top: 89%;
  left: 30.75%;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    left: 27.5%;
  }

  @media (max-width: 575.97px) {
    top: 95%;
    left: 16.5%;
  }
`;

const Arthree = styled.article`
  position: absolute;
  top: 25%;
  right: 5.75%;
  text-align: end;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 12.5%;
  }

  @media (max-width: 575.97px) {
    top: 47%;
    right: 11.85%;
  }
`;

const Artfour = styled.article`
  position: absolute;
  top: 60%;
  right: 7%;
  text-align: end;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 62.75%;
    right: 13.5%;
  }

  @media (max-width: 575.97px) {
    top: 71%;
    right: 0.25%;
  }
`;

const Artdesc = styled.span`
  color: var(--quaternary-color);
`;

const Artdesctwo = styled.span`
  color: var(--quaternary-color);
  margin-right: -2.55;

  /* @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-right: -5rem;
  } */

  @media (max-width: 575.97px) {
    margin-left: 2.15rem;
  }
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

  @media (max-width: 575.97px) {
    width: 4.5rem;

  }
`;


const FurnFourSeccTwo = () => {
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
              <div className='position-relative d-flex justify-content-center'>
                <Imgtwo src={three} alt="Render-three" />
              </div>
              <Artone className='furniture-projfour-item furniture-projfour-item-one'>
                <Artdesc style={{ marginLeft: '-3.5rem' }}>Parota wood</Artdesc>
                <Lineone />
              </Artone>
              <Artwo className='furniture-projfour-item furniture-projfour-item-two'>
                <Artdesc style={{ marginLeft: '-3.75rem' }}>Golden handles</Artdesc>
                <Linetwo />
              </Artwo>
              <Arthree className='furniture-projfour-item furniture-projfour-item-three'>
                <Artdesc style={{ marginRight: '-1.5rem' }}>Mirror</Artdesc>
                <Lineone />
              </Arthree>
              <Artfour className='furniture-projfour-item furniture-projfour-item-four'>
                <Artdesctwo >Tepache color</Artdesctwo>
                <Lineone />
              </Artfour>
            </div>
          </div>
        </div>
      </div>
    </Secctwo>
  )
}

export default FurnFourSeccTwo