import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
import { Validate } from './Validate';
import {
  generateEmail,
  generateFooter,
  emails,
  preSubject,
  preText,
} from './HelperFunctions';
import { AltEmail } from './AltEmail';

export const Email = () => {
  const [error, setStatus] = useState(null);

  const formikObject1 = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      presentLoc: '',
      presentPos: '',
      extra: '',
    },
    validate: Validate,
    onSubmit: (values, { setSubmitting }) => {
      const { name, email, subject, presentLoc, presentPos, extra } = values;
      const stringInterpolation = generateEmail(
        name,
        presentLoc,
        presentPos,
        extra
      );
      const footerInterpolation = generateFooter(name, presentLoc, presentPos);
      const intent = `mailto:${[
        ...emails,
      ]}?subject=${preSubject}.%20${subject}.%20A%20humble%20request%20by%20${name},%20${email}&body=${stringInterpolation}<br>${preText}<br>${footerInterpolation}`;
      try {
        window.location.href = intent;
      } catch (error) {
        setStatus(error);
      }
      setSubmitting(false);
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formikObject1;

  return (
    <>
      <section className='section '>
        <div className=' container is-vcentered is-hcentered' id='Email'>
          <h1 className='title has-text-white has-background-primary is-size-2 is-size-3-mobile'>
            Send an email to the concerned authorities.
          </h1>
          <p className='content is-size-5 is-size-6-mobile has-text-black  is-family-secondary'>
            Please fill in the required details to help circumvent spam filters!
          </p>
          <form onSubmit={handleSubmit}>
            <div className='box is-primary'>
              <FormInput
                errors={errors}
                forWhat='name'
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder='First name &amp; last name'
                name='name'
                label='Your name'
                touched={touched}
                type='name'
                values={values}
                autoComplete='name'
                isSubmitting={isSubmitting}
              />

              <FormInput
                errors={errors}
                forWhat='email'
                handleBlur={handleBlur}
                handleChange={handleChange}
                label='Email ID'
                touched={touched}
                placeholder='Email ID'
                name='email'
                type='email'
                values={values}
                autoComplete='email'
                isSubmitting={isSubmitting}
              />
              <FormInput
                errors={errors}
                forWhat='subject'
                handleBlur={handleBlur}
                name='subject'
                handleChange={handleChange}
                label='Subject'
                placeholder='Add a few lines before the pre-written subject'
                touched={touched}
                type='text'
                autoComplete='subject'
                values={values}
                isSubmitting={isSubmitting}
              />
              <FormInput
                errors={errors}
                forWhat='presentLoc'
                handleBlur={handleBlur}
                name='presentLoc'
                placeholder='Location makes your email unique.'
                handleChange={handleChange}
                label='Present Location'
                touched={touched}
                type='presentLoc'
                autoComplete='address-level1'
                values={values}
                isSubmitting={isSubmitting}
              />
              <FormInput
                errors={errors}
                forWhat='presentPos'
                handleBlur={handleBlur}
                handleChange={handleChange}
                label='Present Position'
                name='presentPos'
                placeholder='Optional, but legitimizes your email further'
                touched={touched}
                type='text'
                autoComplete='organization-title'
                values={values}
                isSubmitting={isSubmitting}
              />
              <FormInput
                errors={errors}
                forWhat='extra'
                handleBlur={handleBlur}
                handleChange={handleChange}
                label={`Why you're against police brutality`}
                name='extra'
                placeholder='Optional, but legitimizes your email further'
                touched={touched}
                type='text'
                values={values}
                isSubmitting={isSubmitting}
              />
            </div>
            <div className='field'>
              <p className='control is-hcentered'>
                <button
                  className='button is-fullwidth is-medium is-success mx-2  mt-3 '
                  disabled={isSubmitting}
                  type='submit'
                >
                  SEND EMAIL
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
      <AltEmail values={values} error={error} />
    </>
  );
};
