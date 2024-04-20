import React from 'react'
import styled from 'styled-components'

const ModalStyles = styled.div`
  background-color: var(--principal-color);
`;

const ModalTitle = styled.h5`
  color: var(--quaternary-color);
`;

const ModalBtn = styled.button`
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
`;

const FormModal = () => {
  return <>
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <ModalStyles className="modal-content">
            <div className="modal-header">
              <ModalTitle className="modal-title" id="exampleModalLabel">
                Thank you for getting in touch with me
              </ModalTitle>
            </div>
            <div className="modal-footer">
              <ModalBtn type="button" className="modal-btn" data-bs-dismiss="modal">Close</ModalBtn>
            </div>
          </ModalStyles>
        </div>
      </div>
  </>
}

export default FormModal
