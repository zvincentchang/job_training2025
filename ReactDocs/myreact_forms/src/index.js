import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import FormText from './components/FormText';
import FormDropdown from './components/FormDropDown';
import FormCheckbox from './components/FormCheckBox';
import FormMultiple from './components/FormMultiple';
import FormValidate from './components/FormValidate';
import UncontrollerForm from './components/UnControllerForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <UncontrollerForm/>
    <FormValidate/>
    <FormMultiple/>
    <FormCheckbox/>
    <FormText/>
    <FormDropdown/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
