import React, { useState, useEffect } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  generateEmailWithoutBreaks,
  generateFooterWithoutBreaks,
  emails,
  preSubject,
  textWithoutBreak,
} from './HelperFunctions';
import * as bulmaToast from 'bulma-toast';

export const AltEmail = ({ values }) => {
  const [fullMessage, setFullMessage] = useState('');
  const [errorAlt, setErrorAlt] = useState(null);
  useEffect(() => {
    const { name, email, subject, presentLoc, presentPos, extra } = values;
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
      { title: 'To', text: `${[...emails]}` },

      {
        title: 'Subject',
        text: `${preSubject}. ${subject} ${
          name ? `A humble request by ${name}, ` : ''
        }${email ? email : ''}
        `,
      },

      {
        title: 'Body',
        text: `${stringInterpolation} ${textWithoutBreak}`,
      },
      {
        title: 'Signature',
        text: `${footerInterpolation}`,
      },
    ];
    try {
      setFullMessage(intent);
    } catch (error) {
      setErrorAlt(errorAlt);
    }

    // return () => {
    //   cleanup
    // }
  }, [errorAlt, values]);

  return (
    <section className='section '>
      <div className='container'>
        <h2 className='title is-size-2 is-size-3-mobile has-text-white has-background-primary'>
          Having trouble? Try this.
        </h2>
        <p className='content is-size-5 is-size-6-mobile has-text-black  is-family-secondary'>
          If the send button isn't working for you, you can fill in the form and
          the contents of this box should automatically update.
        </p>
        {fullMessage !== ''
          ? fullMessage.map((item) => (
              <div key={item.title} className=' mt-2 py-2 px-5'>
                <h2 className='is-size-5-mobile subtitle is-size-4 has-text-black'>
                  {item.title}
                </h2>
                <p
                  className='is-size-6 is-size-7-mobile has-text-white content px-3 py-3 is-family-secondary has-background-primary'
                  style={{
                    wordBreak: 'break-word',
                    borderRadius: '5px',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.text}
                </p>

                <CopyToClipboard
                  onCopy={() =>
                    bulmaToast.toast({
                      message: 'Text copied',
                      type: 'is-success',
                      position: 'bottom-center',
                      duration: 500,
                    })
                  }
                  text={item.text}
                  options={{ format: 'text/plain' }}
                >
                  <button
                    type='button'
                    className='button is-success mt-2 is-fullwidth'
                  >
                    COPY TEXT ABOVE
                  </button>
                </CopyToClipboard>
              </div>
            ))
          : null}
        {errorAlt ? (
          <p className='content mt-2 has-text-black'>
            <span className='help is-danger'>{errorAlt}</span>
          </p>
        ) : null}
      </div>
    </section>
  );
};
