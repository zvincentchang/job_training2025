import React, { Component } from 'react';
import names from './names.json';

class withFilterText extends Component {

    state = { 
        items: names, 
        text: '' 
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value
        });
    };

    onSubmit = e => {
        // 取消form表單預設submit導頁
        e.preventDefault(); 
        const { text} = this.state;
        const newItems = names.filter( name => name.includes(text) );

        this.setState({
            items: newItems
        });
    };

    render() {
        const { items } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChangeText}/>
                    <button type='submit'>文字過濾</button>
                </form>
                <ul>
                {/* map資料走訪 */}
                {
                 items.map( item => <li>{item}</li>  )
                }
                </ul>
                
            </div>
        );
    }
}

export default withFilterText;