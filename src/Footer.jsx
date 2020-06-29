import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer mt-4 has-text-centered has-text-white is-size-7'>
      Please help me maintain this website by submitting a pull request at{' '}
      <a
        className='has-text-info'
        href='https://github.com/SrivastavaSrijan/Police-Brutality-India-Source-Code'
        rel='noopener noreferrer'
        target='_blank'
      >
        GitHub{' '}
      </a>
      or sending me an{' '}
      <a
        className='has-text-info'
        href='mailto:srijan.srivastava35@gmail.com?subject=Bugs%20in%20Police%20Brutality%20India%20Website&body=Describe%20your%20problem%20here.'
      >
        {' '}
        email.{' '}
      </a>
      <br />
      <span className='is-size-4 mt-3 has-text-weight-light'>
        Made by{' '}
        <a
          href='https://srijansrivastava.tech/'
          rel='noopener noreferrer'
          target='_blank'
          className='has-text-info is-underline has-text-weight-bold'
        >
          {' '}
          Srijan.{' '}
        </a>
      </span>
      <br />
      <span className='is-size-7' role='img' aria-label='emoji'>
        ✊🏻 ✊🏼 ✊🏽 ✊🏾 ✊🏿
      </span>
    </footer>
  );
};
