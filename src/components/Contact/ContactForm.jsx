import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import FormModal from './FormModal';
import './ContactForm.css'

const FormCard = styled.div`
  padding: 0 3rem;
  width: 90%;
  height: 42.5vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  border-radius: 1.75rem;
  background-color: var(--quinary-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
    margin-top: 1.25rem;
  }
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const SubmitBtn = styled.button`
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: var(--secondary-color);
  transition: all 0.3s ease-in;

  &:hover{
    transition: all 0.3s ease-out;
    color: var(--secondary-color);
    background-color: var(--principal-color);
  }
`;

const ContactForm = () => {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const [formspreeState, formspreeSubmit] = useFormspree('mgegvzrv');

  const onSubmit = async (data) => {
    if (isValid) {
      await formspreeSubmit(data);
      reset();
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return <>
    <FormCard>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          name='name'
          placeholder='Name'
          {...register("name", { required: true })}
          onBlur={() => handleBlur("name")}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        />
        <input
          type="email"
          id="email"
          name='email'
          placeholder='Email'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          onBlur={() => handleBlur("email")}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <input
          id="message"
          name='message'
          placeholder='Message'
          {...register("message", { required: true })}
          // {...register("message", { required: true, minLength: 15, maxLength: 50 })}
          onBlur={() => handleBlur("message")}
          className={`form-control text-area ${errors.message ? 'is-invalid' : ''}`}
        />
      </Form>
      <SubmitBtn
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
        disabled={!isDirty || !isValid || formspreeState.submitting}
      >
        Submit
      </SubmitBtn>
      <FormModal />
    </FormCard>
  </>
}

export default ContactForm;