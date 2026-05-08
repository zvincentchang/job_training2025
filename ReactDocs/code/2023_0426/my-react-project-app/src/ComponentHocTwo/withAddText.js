import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class withAddText extends Component {

    state = {
        items: [],
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
        const { items, text} = this.state;
        // const newItem = [...items, text];
        this.setState({
            items: [...items, text]
        });
    };

    render() {
        const { items } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChangeText}/>
                    <Button type='submit'>文字新增</Button>
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

export default withAddText;