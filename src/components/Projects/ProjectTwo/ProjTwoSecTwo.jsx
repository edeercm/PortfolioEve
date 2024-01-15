import React from 'react'
import styled from 'styled-components';
import two01 from '../../../assets/images/projectwo/two01.png'
import two02 from '../../../assets/images/projectwo/two02.png'
import two03 from '../../../assets/images/projectwo/two03.png'

const SeccTwo = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--principal-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 5.5rem 0;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 1.25rem 0 0;
  }
`;

const Contone = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 90vh;

    .proj-left-img {
      width: 40%;
      top: 44.75%;
      left: 4%;
    }

    .proj-center-img {
      margin-left: 7.5rem;
      width: 45%;
    }

    .proj-right-img {
      width: 15%;
      top: 45%;
      right: 13.75%;
    }

    .proj-art-one {
      top: 40.5%;
      left: 26%;
    }

    .proj-art-two {
      top: 59%;
      left: 12%;
    }

    .proj-art-three {
      top: 61.5%;
      left: 33%;
    }

    .proj-art-four {
      top: 46%;
      right: 5.75%;
    }

    .proj-art-five {
      top: 55.75%;
      right: 7.25%;
    }

    .proj-itemline-one {
      width: 5.775rem;
    }

    .proj-itemline-two {
      width: 12.5rem;
    }
    
  }

  @media (max-width: 575.98px) {
    
  }

`;

const Label = styled.h2`
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: var(--quaternary-color);
`;

const Labeltwo = styled.h4`
  color: var(--quaternary-color);
`;

const Contwo = styled.div`
  position: relative;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 45vh;
  }

  @media (max-width: 575.98px) {
    height: 50vh;
  }

`;

const Imgone = styled.img`
  position: absolute;
  width: 30%;
  top: 37.75%;
  left: 12.5%;
  z-index: 2;

  @media (max-width: 575.98px) {
    width: 40%;
    top: 42%;
    left: 4.5%;
  }
`;

const Imgtwo = styled.img`
  margin-left: 5rem;
  width: 37.5%;
  z-index: 1;

  @media (max-width: 575.98px) {
    width: 55%;
  }
`;

const Imgthree = styled.img`
  position: absolute;
  width: 11.25%;
  top: 37.75%;
  right: 26%;
  z-index: 2;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 21%;
  }

  @media (max-width: 575.98px) {
    width: 20%;
    top: 42.5%;
    right: 5%;
  }
`;

const Artone = styled.article`
  position: absolute;
  left: 30.75%;
  top: 31%;
  z-index: 3;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    left: 28.75%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const Artwo = styled.article`
  position: absolute;
  top: 66.25%;
  left: 11.5%;
  z-index: 3;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 62.5%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const Arthree = styled.article`
  position: absolute;
  top: 80%;
  left: 31%;
  z-index: 3;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    top: 72%;
    left: 28%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const Artfour = styled.article`
  position: absolute;
  top: 42%;
  right: 17.75%;
  text-align: end;
  z-index: 3;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 8%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const Artfive = styled.article`
  position: absolute;
  top: 63.5%;
  right: 22.5%;
  text-align: end;
  z-index: 3;
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    right: 13%;
    top: 59%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const Lineone = styled.div`
  width: 10rem;
  height: 0.15rem;
  background-color: black;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 7rem;
  }
`;

const Linetwo = styled.div`
  width: 15rem;
  height: 0.15rem;
  background-color: black;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 10rem;
  }
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const ProjTwoSecTwo = () => {
  return (
    <SeccTwo>
      <div className='container-sm container-md container-lg container-xl container-xxl'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className='position-relative'>
              <Contone>
                <Label>MOODBOARD</Label>
                <Labeltwo>Kitchen/Dining Room</Labeltwo>
              </Contone>
            </div>
            <Contwo>
              <div className='position-relative d-flex justify-content-center'>
                <Imgone src={two02} alt="Img-one" />
                <Imgtwo src={two01} alt="Img-two" />
                <Imgthree src={two03} alt="Img-three" />
              </div>
              <Artone>
                <span style={{ marginLeft: '-2.55rem' }}>Rioja melamine</span>
                <Linetwo></Linetwo>
              </Artone>
              <Artwo>
                <span style={{ marginLeft: '-3.755rem' }}>Current armchair</span>
                <Lineone></Lineone>
              </Artwo>
              <Arthree>
                <span style={{ marginLeft: '-1.375rem' }}>Deck</span>
                <Lineone></Lineone>
              </Arthree>
              <Artfour>
                <span style={{ marginRight: '-2rem' }}>Luminary</span>
                <Lineone></Lineone>
              </Artfour>
              <Artfive>
                <span style={{ marginRight: '-2.85rem' }}>Melamine vision</span>
                <Linetwo></Linetwo>
              </Artfive>
            </Contwo>
            <div className="position-relative mt-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className='position-absolute end-0 bottom-0 text-end'>
                <div className='d-flex flex-column gap-2'>
                  <h5>Color palette</h5>
                  <div className='d-flex flex-row gap-2'>
                    <Circle style={{ backgroundColor: '#C4BFB8' }}></Circle>
                    <Circle style={{ backgroundColor: '#94672D' }}></Circle>
                    <Circle style={{ backgroundColor: '#909986' }}></Circle>
                    <Circle style={{ backgroundColor: '#D7D98A' }}></Circle>
                    <Circle style={{ backgroundColor: '#7F432F' }}></Circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SeccTwo>
  );
};

export default ProjTwoSecTwo 