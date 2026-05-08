// import React, { Component } from 'react';
import React from 'react';
import Item from './Item';

// class List extends Component {
class List extends React.Component {

        

    render() {
        return (
            <div>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        );
    }

}

export default List;