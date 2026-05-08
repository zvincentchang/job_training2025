import React, { Component } from 'react';

class CommonViewList extends Component {
    render() {
        // text, items, onChangeText, onSubmit 父組件(withFilterText 文字過濾、withAddText 文字新增)
        // HocAppTwo最上層組件(btnText)
        const {text, items, onChangeText, onSubmit, btnText} = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input value={text} onChange={onChangeText}/>
                    <button type="submit">{btnText}</button>
                </form>
                <ul>
                    {
                        items.map( item => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default CommonViewList;