import React, { Component } from 'react';
import Item2 from './Item2';

// 上層組件(List2)
// JSX
// text、price 傳入子元件的屬性稱為props
class List2 extends Component {
    render() {
        return (
            <div>
                <Item2 text="Learn JavaScript" price={100}/>
                <hr/>
                <Item2 text="Learn React" price="100"/>
                <hr/>
                <Item2 text="Make Money"/>
                <hr/>
                <Item2>Buy a House</Item2>
            </div>
        );
    }
}

export default List2;