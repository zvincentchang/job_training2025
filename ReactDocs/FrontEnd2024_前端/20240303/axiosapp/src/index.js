import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
//import BookComponent from './components/BookComponent';
//import FetchData from './components/FetchData';
//import FetchMovie from './components/FetchMovie';
import BasicRoute from './components/BasicRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BookComponent/> */}
    {/* <FetchData userId="2"/> */}
    {/* <FetchMovie/> */}
    <BasicRoute/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
