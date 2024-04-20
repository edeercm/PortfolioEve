import React from 'react'
import styled from 'styled-components'
import cel from '../../assets/images/contactme/tel.png'
import email from '../../assets/images/contactme/email.png'

const Content = styled.div`

  

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-bottom: 1rem;
    height: 30vh;
  }

  @media (max-width: 575.97px) {
    height: 37.75vh;
  }
`;

const Label = styled.h4`
  color: var(--quaternary-color);
`;

const ContactLabel = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: var(--secondary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Icon = styled.img`
  width: 8.75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Labelthree = styled.h4`
  font-size: 1.15rem;
  color: var(--secondary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const ContactInfo = () => {
  return <>
    <div>
      <Label>Project in mind?</Label>
      <ContactLabel>Contact me</ContactLabel>
    </div>
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex flex-row align-items-center gap-2'>
        <Icon src={cel} alt="Phone-icon" />
        <Labelthree>294 152 5765</Labelthree>
      </div>
      <div className='d-flex flex-row align-items-center gap-2'>
        <Icon src={email} alt="Email-icon" />
        <Labelthree>arq.evelinalvarado@gmail.com</Labelthree>
      </div>
    </div>
  </>
}

export default ContactInfo