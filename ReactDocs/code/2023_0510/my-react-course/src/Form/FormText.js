import React, { Component } from 'react';

// 下拉式選單資料
const relations = [ '父','母','子','女','妻','友' ];

const relationsObjs = [ 
    {label: '父', id: 0},
    {label: '母', id: 1},
    {label: '子', id: 2},
    {label: '女', id: 3},
    {label: '妻', id: 4},
    {label: '友', id: 5} 
];

class FormText extends Component {

    state = {
        text: "abc",
        count: 0,
        rel: relations[0],
        // 下拉選單的值為字串
        relObj: `${relationsObjs[0].id}` 
    };

    onChangeText = (even) => {
        this.setState ({
            text: even.target.value
        });
    };

    onChangeNumber = (even) => {
        this.setState ({
            // 取到的值都是字串型別所以要轉整數
            count: parseInt(even.target.value)            
        });
    };

    onChangeSelect = (even) => {
        this.setState({
            rel: even.target.value
        })
    }

    onChangeSelectObj = (even) => {
        this.setState({
            relObj: even.target.value
        })
    }

    render() {
        const {text, count, rel, relObj} = this.state;
        const str = '9453';
        const number = 9453;
        return (
            <div>
                <h3>type="text"</h3>
                <input type="text" value={text} onChange={this.onChangeText}/>
                <br/>
                <textarea value={text} onChange={this.onChangeText}/>
                <h3>{text}</h3>

                <hr/>

                <h3>type="number"</h3>
                <input type="number" value={count} onChange={this.onChangeNumber}/>
                <h3>{ count + 1 }</h3>

                <hr/>

                <h3>select array map</h3>
                <select onChange={this.onChangeSelect}>
                    {relations.map( (element, idx) => 
                        <option key={element} value={element}>{element}</option>
                    )}
                </select>
                <h3>{rel}</h3>

                <hr/>
                
                <h3>select array obj map</h3>
                <select onChange={this.onChangeSelectObj}>
                    {relationsObjs.map( (element, idx) => 
                        <option key={element.id} value={element.id}>{element.label}</option>
                    )}
                </select>
                <h3>{relObj}</h3>
                
                <hr/>

                {/* 
                    r.id:數字、relObj:字串 
                    == 兩個等於只比較值
                    === 三個等於比較值與型態
                */}
                <h3>{ `${str == number}` }</h3>
                <h3>{ `${str === number}` }</h3>

            </div>
        );
    }
}

export default FormText;