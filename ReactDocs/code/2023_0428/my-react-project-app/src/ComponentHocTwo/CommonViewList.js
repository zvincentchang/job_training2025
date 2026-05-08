import React, { Component } from 'react';

class CommonViewList extends Component {
    render() {
        const { onSubmit,onChangeText,items  } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input onChange={onChangeText}/>
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

export default CommonViewList;