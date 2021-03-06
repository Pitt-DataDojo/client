import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';

ReactDOM.render(
  <LocaleProvider locale={enUS}><App /></LocaleProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
