import React from 'react';

export const FormInput = ({
  label,
  name,
  placeholder,
  forWhat,
  type,
  autoComplete,
  children,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  isSubmitting,
}) => {
  return (
    <div className='field mb-4 px-5 '>
      <div className={`control ${isSubmitting ? 'is-loading' : ''}`}>
        <label
          className='label is-size-6 is-size-7-mobile has-text-white is-family-secondary'
          htmlFor={forWhat}
        >
          {label}
        </label>
        <input
          className={`input is-size-6 is-family-secondary is-medium ${
            errors[forWhat] && touched[forWhat] ? 'is-danger' : ''
          }`}
          id={forWhat}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
          values={values[forWhat]}
          autoComplete={autoComplete}
        />
      </div>
      {errors[forWhat] && touched[forWhat] ? (
        <p className='help is-danger is-size-6 has-family-secondary'>
          &#9888; {errors[forWhat]}
        </p>
      ) : null}
    </div>
  );
};
