import React from 'react'
import styled from 'styled-components'
import ContactInfo from '../../components/Contact/ContactInfo'
import ContactForm from '../../components/Contact/ContactForm'

const Section = styled.section`
  width: 100%;
  height: 97.5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 7.5rem 0;
  }
`;

const Container = styled.div`
  width: 75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    margin-top: 3rem;
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Row = styled.div`
  height: 60vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Contact = () => {
  return <>
    <Section>
      <Container className="container">
        <Row className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
            <ContactInfo />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-end justify-content-end">
            <ContactForm />
          </div>
        </Row>
      </Container>
    </Section>
  </>
}

export default Contact