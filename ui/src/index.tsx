import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import GA4React from 'ga-4-react';

const gaMeasurementId = process.env.REACT_APP_GA_MEASUREMENT_ID as string;
const ga4react = new GA4React(gaMeasurementId,{ debug_mode: process.env.NODE_ENV !== 'production'});

(async() =>  {
  
  try{
    await ga4react.initialize();
  }catch(error){
    console.error(error);
  }

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();