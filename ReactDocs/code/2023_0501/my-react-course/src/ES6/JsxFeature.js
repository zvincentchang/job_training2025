import React, { Component } from 'react';
import '../CSS/App.css';
import logo from '../IMG/logo.svg';


class JsxFeature extends Component {

    onClickBtn = () => {
        console.log("onClickBtn");
    };

    render() {
        /*
        JSX物件
        每一個組件都會有一個render函式,將JSX結果渲染至畫面繪製
        1. must close tag (HTML都必須有結束標籤 EX:<div>...</div>、<input/>)
        2. self close <input/>
        3. html tag class 撞名 react class, JSX 使用 className 取代
        4. onChange、onClick 駝峰式命名(不同於html全小寫)
        5. 使用大括號 {} 括住一個「值」或「表達示」
        */
        let number = 8;    
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <h1>{number}</h1>
                    <button onClick={ this.onClickBtn }>onClickBtn</button>

                </header>
            </div>
        );
    }

};

export default JsxFeature;