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
        text: 'abc',
        count: 5,
        rel: relations[0],
        relObj: `${relationsObjs[0].id}`
    }

    onChangeText = (even)  => {
        this.setState({
            text: even.target.value
        });
    }

    onChangeNumber = (even)  => {
        this.setState({
            // count: +even.target.value
            count: parseInt(even.target.value)
        });
    }

    onChangeSelect = (even)  => {
        this.setState({
            rel: even.target.value
        });
    }

    onChangeSelectObj = (even)  => {
        this.setState({
            relObj: even.target.value
        });
    }

    render() {
        const { text,count,rel,relObj } = this.state;

        return (
            <div>
               <input type='text' value={text} onChange={this.onChangeText} />
               <br/>
               <textarea value={text} onChange={this.onChangeText} />
               <h3>{text}</h3>
               <hr/>
               <input type='number' value={count} onChange={this.onChangeNumber}  />
               <h3>{count}</h3>
               <hr/>
               <select onChange={this.onChangeSelect}>
                   {
                    relations.map( (e) => <option key={e} value={e}>{e}</option> )
                   }
               </select>
               <h3>{rel}</h3>
               <hr/>
               <select onChange={this.onChangeSelectObj}>
                   {
                    relationsObjs.map( (e) => <option key={e.id} value={e.id}>{e.label}</option> )
                   }
               </select>
               <h3>{relObj}</h3>

            </div>
        );
    }
}

export default FormText;