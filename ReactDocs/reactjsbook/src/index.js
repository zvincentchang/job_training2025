import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import HelloHook from "./components/HelloHook";
//import HelloHook2 from "./components/HelloHook2";
//import HelloHook3 from "./components/HelloHook3";
//import HelloFragments from "./components/HelloFragments";
//import HelloContext from "./components/HelloContext";
//import HelloHOC from "./components/HelloHOC";
//import HelloRefs from "./components/HelloRefs";
//import HelloPortals from "./components/HelloPortals";
import HelloRefsAndDOM from "./components/HelloRefsAndDOM";
//import HelloWebComponents from "./components/HelloWebComponents";
//import HelloRenderProp from "./components/HelloRenderProp";
//import HelloErrorBoundaries from "./components/HelloErrorBoundaries";
//import App from "./routerdemo/App";

//import { createStore } from 'redux';//需要安装对应的包
//import {Provider} from 'react-redux';
//import HelloWorld from "./components/HelloWorld";
//import MyCounterApp from "./counter/containers/CounterContainer";
//import changeValue from './counter/reducers/Reducer'
//const store = createStore(changeValue);//用reducer来创建store

//import App from "./todolists/components/App";
//import reducer from "./todolists/reducers/Reducer";
//const store = createStore(reducer)

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <HelloRefsAndDOM/>

  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
