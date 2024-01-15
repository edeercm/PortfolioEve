import React from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import './ContactForm.css'

function ContactForm() {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const [formspreeState, formspreeSubmit] = useFormspree('mgegvzrv'); // Reemplaza 'mgegvzrv' con tu hashid

  // const onSubmit = () => {
  //   if (isValid) {
  //     reset();
  //   }
  // };

  const onSubmit = async (data) => {
    if (isValid) {
      // Enviar el formulario a Formspree usando su hook
      await formspreeSubmit(data);

      // Restablecer el formulario después de enviar con éxito
      reset();

      // Mostrar el modal solo si el envío fue exitoso
      // if (formspreeState.succeeded) {
      //   const contactModal = new window.bootstrap.Modal(document.getElementById('contactModal'));
      //   contactModal.show();
      // }
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: '70%' }}
    >
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
      <textarea
        id="message"
        name='message'
        placeholder='Message'
        {...register("message", { required: true })}
        onBlur={() => handleBlur("message")}
        className={`form-control text-area ${errors.message ? 'is-invalid' : ''}`}
      />
      <button
        type="submit"
        className={`contact-btn ${!isValid ? 'contact-btn-disabled' : ''}`}
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
        disabled={!isDirty || !isValid || formspreeState.submitting}
      >
        Submit
      </button>
      <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">
                Thank you for getting in touch with me
              </h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;