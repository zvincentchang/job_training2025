import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Greeting from './components/Greeting';
//import LoginControl from './components/LoginControl';
//import App2 from './components/App2';
//import Employee2 from './components/Employee2';
//import ShowCard from './components/UserCard';
//import FormState from './components/FormState';
//import MyTimer from './components/MyTimer';
//import Counter from './components/Counter';
import EmployeeComponent from './components/EmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeComponent/>
    {/* <Counter/> */}
    {/* <MyTimer/> */}
    {/* <FormState name="Danny" email="danny@gmail.com" password="d123"/> */}
    {/* <ShowCard/> */}
    {/* <App2/>
    <Employee2  firstName = "Mary" lastName = "Wu" emailId = "mary@gmail.com" /> */}
    
    {/* <LoginControl /> */}
    {/* <Greeting isLoggedIn={true} /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
