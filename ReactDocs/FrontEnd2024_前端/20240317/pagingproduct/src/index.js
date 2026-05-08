import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import PagingProducts from './components/PagingProduct';
//import BootstrapTable from './components/BootstrapTable';
//import BootstrapTableFetch from './components/BootstapTableFetch';
//import FormText from './components/FormText';
//import FormCheckbox from './components/FormCheckbox';
//import FormDropdown from './components/FormSelect';
//import FormMultiple from './components/FormMultiple';
//import FormValidate from './components/FormValidate';
//import UncontrollerForm from './components/UnControlForm';
//import ContactForm from './components/ContactForm';
import ProductListForm from './components/ProductListForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PagingProducts/> */}
    {/* <BootstrapTable/> */}
    {/* <BootstrapTableFetch/> */}
    {/* <FormText/>
    <FormCheckbox/>
    <FormDropdown/> */}
    {/* <FormMultiple/> */}
    {/* <FormValidate/> */}
    {/* <UncontrollerForm/> */}
    {/* <ContactForm/> */}
    <ProductListForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
