import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import FormText from './components/FormText';
import FormCheckbox from './components/FormCheckBox';
import FormDropdown from './components/FormDropDown';
import FormMultiple from './components/FormMultiple';
import FormValidate from './components/FomValidate';
import UncontrollerForm from './components/UnControllerFom';
import FrontEndForm from './components/FrontEndForm';
import Users from './components/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Users/>
    <FrontEndForm/>
    <UncontrollerForm/>
    <FormValidate/>
    <FormMultiple/>
    <FormDropdown/>
    <FormCheckbox/>
   <FormText/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
