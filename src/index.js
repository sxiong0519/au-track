import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuTrack } from './AuTrack';
import { BrowserRouter as Router } from "react-router-dom";
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuTrack />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
