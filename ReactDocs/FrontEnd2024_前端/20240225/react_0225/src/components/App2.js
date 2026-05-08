import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Employee } from './Employee';
function App2() {
  return (
    <div className="App">
      <header className="App-header">
          <Employee firstName = "Amy" lastName = "Lin" emailId = "amy@gmail.com" />
      </header>
    </div>
  );
}
export default App2;
