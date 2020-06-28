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
      <div
        className={`control has-icons-left has-icons-right ${
          isSubmitting ? 'is-loading' : ''
        }`}
      >
        <label
          className='label is-size-6 is-size-7-mobile has-text-white is-family-secondary'
          htmlFor={forWhat}
        >
          {label}
        </label>
        <input
          className={`input is-small ${
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

        <span className='icon is-small is-left'>
          <i>{children}</i>
        </span>
        {errors[forWhat] && touched[forWhat] ? (
          <span className='icon is-small is-right'></span>
        ) : null}
      </div>
      {errors[forWhat] && touched[forWhat] ? (
        <p className='help is-danger is-size-7'>{errors[forWhat]}</p>
      ) : null}
    </div>
  );
};
