import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import cel from '../../assets/images/contactme/tel.png'
import email from '../../assets/images/contactme/email.png'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contactsecc = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--principal-color);


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 7.5rem 0;
  }
`;

const Contone = styled.section`
  width: 75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Contwo = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: 37.75vh;
  }
`;

const Label = styled.h4`
  color: var(--quaternary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Labeltwo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: var(--secondary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Icon = styled.img`
  width: 10%;
  object-fit: contain;
  object-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Conthree = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {

  }
`;

const Labelthree = styled.h4`
  color: var(--secondary-color);
  font-size: 1.15rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Contfour = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 90%;
  height: 45vh;
  border-radius: 3rem;
  background-color: var(--quinary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    margin-top: 1.25rem;
    width: 100%;

  }
`;

const Contact = () => {
  return <>
    <Contactsecc>
      <Contone className="container-sm container-md container-lg container-xl cotainer-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Contwo>
              <div>
                <Label>Project in mind?</Label>
                <Labeltwo>Contact me</Labeltwo>
              </div>
              <div className='d-flex flex-column gap-3 '>
                <Conthree>
                  <Icon src={cel} alt="Celphone-icon" className='contact-icon' />
                  <Labelthree>294 152 5765</Labelthree>
                </Conthree>
                <Conthree>
                  <Icon src={email} alt="Email-icon" className='contact-icon' />
                  <Labelthree>arq.evelinalvarado@gmail.com</Labelthree>
                </Conthree>
              </div>
            </Contwo>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-end justify-content-end">
            <Contfour>
              <ContactForm />
            </Contfour>
          </div>
        </div>
      </Contone>
    </Contactsecc>
  </>
}

export default Contact