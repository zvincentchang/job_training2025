import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import FavoriteColor from './components/FavoriteColor';
//import UpdateColor from './components/UpdateColor';
//import Car from './components/Car';
//import MyTimer from './components/MyTimer';
//import Calculation from './components/Calculation';
import EmployeeComponent from './components/EmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FavoriteColor/>
    <UpdateColor/> */}
    {/* <Car/> */}
    {/* <MyTimer/> */}
    {/* <Calculation/> */}
    <EmployeeComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
