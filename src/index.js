import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Head } from './Head';
import { Body } from './Body';
import { Email } from './Email';
import { Footer } from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Body />
    <Email />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
