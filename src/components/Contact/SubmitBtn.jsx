import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--principal-color);
  font-family: 'Gilroy-Regular', sans-serif;
  cursor: pointer;
  background-color: var(--secondary-color);
  transition: all 0.3s ease-in;

  &:hover{
    transition: all 0.3s ease-out;
    color: var(--secondary-color);
    background-color: var(--principal-color);
  }
`;

const SubmitBtn = ({ isValid }) => {
  return <>
    <Button
      type="submit"
      className={`contact-btn ${!isValid ? 'contact-btn-disabled' : ''}`}
      data-bs-toggle="modal"
      data-bs-target="#contactModal"
    // disabled={!isDirty || !isValid || formspreeState.submitting}
    >
      Submit
    </Button>
  </>
}

export default SubmitBtn