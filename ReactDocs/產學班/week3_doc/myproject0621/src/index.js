import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import { FuncEmployee1 } from './components/FuncEmployee';
//import { FuncEmployee2 } from './components/FuncEmployee2';
//import CSEmployee from './components/CSEmployee';
//import CSEmployee2 from './components/CSEmployee2';
//import UserCard from './components/UserCard';
//import UserForm from './components/UserForm';
//import FetchUserData from './components/FetchUserData';
import MovieData from './components/MovieData';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const user = {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   phone: '123-456-7890'
//   };
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FuncEmployee1 firstName = "Amy" lastName = "Lin" emailId="amy@gmail.com" /> */}
    {/* <CSEmployee2 firstName = "Amy4" lastName = "Lin4" emailId="amy4@gmail.com" /> */}
    {/* <UserCard {...user} /> */}
    {/* <UserForm/> */}
    {/* <FetchUserData userID="1"/> */}
    <MovieData/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
