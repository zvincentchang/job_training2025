import React, { Component } from 'react';
import PureItem from './PureItem';

const steps = [
    'Learn JavaScript',
    'Learn React',
    'Make Money',
    'Buy a House',
    'Hello Kitty'
];

const infoOne = {
    userID: 1, 
    name: 'Angular', 
    price: 3200, 
    videos: 60, 
    teacher: 'scars'
};
const infoTwo = { userID: 2, name: 'React', price: 5500, videos: 75, teacher: 'Shang' };
const infoThree = { userID: 3, name: 'Vue', price: 4500, videos: 45, teacher: 'Mark' };
const infos = [infoOne, infoTwo, infoThree];

class ListRendering extends Component {

    state = {
        list: infos
    };

    removeFirst = () => {
        this.setState({
            // 抓取第一個之後的所有陣列元素
            list: this.state.list.slice(1)
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        // 參數一:陣列元素、參數二:陣列索引值
                        steps.map((e, i) => <li key={e}>{i + 1} : {e}</li>)
                    }
                    <hr/>
                    {
                        Object.keys(infoOne).map( (key) => {
                            const value = infoOne[key];
                            return <li key={key}> {key} : {value} </li>;
                        })
                    }
                    <hr/>
                    {
                        infos.map( (info) => <li key={info.userID}>{info.userID} / {info.name} / {info.price} / {info.teacher}</li> )
                    }
                    <hr/>
                    {
                        infos.map( ({userID, name, price, teacher}) => <li key={userID}>{userID} / {name} / {teacher} / {price} </li> )
                    }
                    <hr/>
                    {
                        this.state.list.map(
                            (info, index) => <PureItem key={info.userID} info={info} />
                        )
                    }
                    <button onClick={this.removeFirst}>-</button>
                </ul>
            </div>
        );
    }
}

export default ListRendering;