import React,{ Component } from "react";
import '../CSS/App.css';
import logo from '../IMG/logo.svg'

class JsxFeature extends Component {

    onClickBtn = () => {
        console.log("onClickBtn");
    };

    /*
    JSX 物件
    每一個組件都會有一個 render 函式,將 JSX 結果渲染至畫面繪製
    1. must close tag (HTML都必須有結束標籤 EX:<div>...</div>、<input/>)
    2. self close <input/>
    3. html tag class 撞名 react class, JSX 使用 className 取代
    4. onChange、onClick 駝峰式命名 (不同於html全小寫)
    5. 使用大括號 {   } 括住一個「值」或「表達示」    
    */
    render() {

        let number = 8;

        return (
            <div>
                <header className="App-header">
                    <span>Hello JSX 1</span>
                    <br/>
                    <span>Hello JSX 2</span>
                    <img src={logo} />
                    <button onClick={ this.onClickBtn }>onClickBtn</button>
                    <h1>{number}</h1>
                </header>

            </div>
        );
    }

}

export default JsxFeature;