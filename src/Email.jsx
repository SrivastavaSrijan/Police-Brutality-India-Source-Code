import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
import { Validate } from './Validate';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const emails = [
  'cmsec@tn.gov.in',
  'cmcell@tn.gov.in',
  'mlakolathur@tn.gov.in',
  'kanimozhi@sansad.nic.in',
  'cs@tn.gov.in',
  'regrgenl@nic.in',
  'hcourt@tn.nic.in',
  'collrtut@nic.in',
  'dgp@tn.gov.in',
  'igp.south@tncctns.gov.in',
  'shrc@tn.nic.in',
  'sec.shrc@tn.gov.in',
  'sp.tut@tncctns.gov.in',
  'adsp.crthoothukudi@tncctns.gov.in',
  'adsp.pew_thoothukudi@tncctns.gov.in',
];
const textWithoutBreak = `
I am emailing today to demand accountability for the custodial torture and subsequent deaths of Jayaraj and Bennix Emmanuel in Sattankulam, Thoothukudi by officers Mr. Balakrishnan and Mr. Pauldurai under the Section 10-19 of Tamil Nadu Police (Reforms) Act, 2013.


I demand an unbiased investigation into their alleged torture and deaths and that the officers involved be terminated, arrested and charged for murder. I also demand for justice for the family of the two men who have lost two of their innocent family members because of the brutality of the officers involved.


Suspension and transfer of the officers to a different police department simply isn’t enough. The officers involved must face consequences for their actions in order to deter law enforcement from the gross misuse of power in the future. Mr. Balakrishnan and Mr. Pauldurai must be charged for the brutal assault of the two men and the sexual misconduct committed against Bennix in custody.


In addition, I demand we provide essential human rights training to all police officers and for the constitution of the Police Complaints Authority in Tamil Nadu so as to provide speedy and swift justice to victims of police brutality.
`;
const preText = `
I am emailing today to demand accountability for the custodial torture and subsequent deaths of Jayaraj and Bennix Emmanuel in Sattankulam, Thoothukudi by officers Mr. Balakrishnan and Mr. Pauldurai under the Section 10-19 of Tamil Nadu Police (Reforms) Act, 2013.
<br>
I demand an unbiased investigation into their alleged torture and deaths and that the officers involved be terminated, arrested and charged for murder. I also demand for justice for the family of the two men who have lost two of their innocent family members because of the brutality of the officers involved.
<br>
Suspension and transfer of the officers to a different police department simply isn’t enough. The officers involved must face consequences for their actions in order to deter law enforcement from the gross misuse of power in the future.
<br>
Mr. Balakrishnan and Mr. Pauldurai must be charged for the brutal assault of the two men and the sexual misconduct committed against Bennix in custody.
<br>
In addition, I demand we provide essential human rights training to all police officers and for the constitution of the Police Complaints Authority in Tamil Nadu so as to provide speedy and swift justice to victims of police brutality.
`;
const preSubject =
  'Justice for Sattankulam shopkeepers Jayaraj and Bennix Emmanuel ';
const generateEmail = (name, presentLoc, presentPos, extra) => {
  const text = `Dear Sir/Madam,<br><br>
  My name is ${name} and I am a resident of ${presentLoc}.<br> ${
    presentPos ? `I work as a/an ${presentPos}.` : ''
  }<br>${extra ? extra : ''} ${' '} <br>`;
  return text;
};
const generateEmailWithoutBreaks = (name, presentLoc, presentPos, extra) => {
  const text = `Dear Sir/Madam,
  ${name !== '' ? `My name is ${name}` : ''} ${
    presentLoc !== '' ? `and I am a resident of ${presentLoc}.` : ''
  } ${presentPos ? `I work as a/an ${presentPos}.` : ''} ${
    extra ? extra : ''
  } ${' '} `;
  return text;
};
const generateFooter = (name, presentLoc, presentPos) => {
  const text = `Hoping for immediate action,<br>
  ${name} <br> ${presentLoc} <br> ${
    presentPos ? `${presentPos}` : ''
  } <br><br>`;
  return text;
};
const generateFooterWithoutBreaks = (name, presentLoc, presentPos) => {
  const text = `Thanking you,
   ${name !== '' ? `Hoping for immediate action, ${name}.` : ''} ${
    presentLoc !== '' ? `${presentLoc}` : ''
  } ${presentPos ? `${presentPos}` : ''} `;
  return text;
};
export const Email = () => {
  const [error, setStatus] = useState(null);
  const [fullMessage, setFullMessage] = useState('');
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
    onSubmit: async (values, { setSubmitting }) => {
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
      ]}?subject=${subject}${preSubject}, from ${email}.&body=${stringInterpolation}<br>${preText}<br><br>${footerInterpolation}`;
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
      <div
        className=' container box is-primary px-5 py-6 is-vcentered is-hcentered'
        id='Email'
      >
        <h2 className='subtitle has-text-white has-background-primary'>
          Send an email to the concerned authorities.
        </h2>
        <p className='content has-text-white  is-family-secondary'>
          Please fill in the required details to help circumvent spam filters!
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput
            errors={errors}
            forWhat='name'
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder='First &amp; last name, please'
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
            placeholder='The email ID you would be using to send this.'
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
            placeholder='Make it unique to prevent this from being spam.'
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
            placeholder='Your location again makes it unique.'
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
            placeholder='Optional, but legitimizes your email further.'
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
            label='Extra text'
            name='extra'
            placeholder='Optional, but legitimizes your email further.'
            touched={touched}
            type='text'
            values={values}
            isSubmitting={isSubmitting}
          />

          <div className='field'>
            <p className='control is-hcentered'>
              <button
                className='button is-success mx-2  mt-3 '
                disabled={isSubmitting}
                type='submit'
              >
                Send
              </button>
              <button
                disabled={isSubmitting}
                className='button has-no-bg mx-2 mt-3 py-3 px-2'
                type='button'
                onClick={() => {
                  const {
                    name,
                    email,
                    subject,
                    presentLoc,
                    presentPos,
                    extra,
                  } = values;
                  const stringInterpolation = generateEmailWithoutBreaks(
                    name,
                    presentLoc,
                    presentPos,
                    extra
                  );
                  const footerInterpolation = generateFooterWithoutBreaks(
                    name,
                    presentLoc,
                    presentPos
                  );
                  const intent = [
                    { title: 'To these people', text: `${[...emails]}` },

                    {
                      title: 'Subject',
                      text: `${subject ? subject : ''} ${preSubject} ${
                        email !== '' ? `,from ${email}` : ''
                      }`,
                    },

                    {
                      title: 'Body',
                      text: `
                    ${stringInterpolation}
                    
                    ${textWithoutBreak} 
                    
                    `,
                    },
                    {
                      title: 'End email with',
                      text: `${footerInterpolation}`,
                    },
                  ];
                  try {
                    setFullMessage(intent);
                  } catch (error) {
                    setStatus(error);
                  }
                }}
              >
                Having trouble? Try this.
              </button>
            </p>
            {fullMessage !== ''
              ? fullMessage.map((item) => (
                  <p className=' mt-2 py-2 px-5'>
                    <p>
                      <h2 className='subtitle is-size-4 has-text-white'>
                        {item.title}
                      </h2>
                      <p
                        className='has-text-white content px-3 py-3 is-family-secondary has-background-dark'
                        style={{ wordBreak: 'break-word' }}
                      >
                        {item.text}
                      </p>
                      <button
                        type='button'
                        className='button is-white mt-2 is-small'
                      >
                        <CopyToClipboard text={item.text}>
                          <span>Copy</span>
                        </CopyToClipboard>
                      </button>
                    </p>
                  </p>
                ))
              : null}
          </div>
        </form>
        {error ? (
          <p className='content mt-2 has-text-black'>
            <span className='help is-danger'>{error.message}</span>
          </p>
        ) : null}
      </div>
      <footer className='footer mt-4 has-text-centered has-text-white is-size-7'>
        Please help me maintain this website by examining the code at{' '}
        <a
          className='has-text-link'
          href='https://github.com/SrivastavaSrijan/Police-Brutality-India-Source-Code'
          rel='noopener noreferrer'
          target='_blank'
        >
          GitHub{' '}
        </a>
        and submitting pull request or sending me an{' '}
        <a
          className='has-text-link'
          href='mailto:srijan.srivastava35@gmail.com'
        >
          {' '}
          email.{' '}
        </a>
        <br />
        <span className='is-size-4'>Made by Srijan.</span>
        <br />
        <span className='is-size-7' role='img' aria-label='emoji'>
          ✊ ✊🏻 ✊🏼 ✊🏽 ✊🏾 ✊🏿
        </span>
      </footer>
    </>
  );
};
