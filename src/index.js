import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Head } from './Head';
import { Body } from './Body';
import { Email } from './Email';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Body />
    <Email />
  </React.StrictMode>,
  document.getElementById('root')
);
