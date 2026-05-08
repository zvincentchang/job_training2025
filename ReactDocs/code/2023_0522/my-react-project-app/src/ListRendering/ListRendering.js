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
const infoFour = { userID: 4, name: 'Java', price: 6500, videos: 55, teacher: 'YuShangLee' };
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

    addInfoFour = () => {
        const { list } = this.state;
        // 不存在於list清單裡才能加入避免key值重覆
        const info = list.filter(info => info.userID == infoFour.userID);
        if(info.length == 0){
            this.setState({
                list: [...list, infoFour]
            });
        }
    }

    updateInfoFour = () => {
        // 先將state裡要更新的物件從清單中移除
        this.setState( state => ({
            list: state.list.filter(info => info.userID != infoFour.userID)
        }));
        
        // 查詢要更新的物件
        infoFour.price = 6999;

        // 從清單移除後再重新加入更新
        this.setState( state => ({
            list: [...state.list, infoFour]
        }));
    }

    render() {
        return (
            <div>
                <ul>
                    {/* {
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
                    } */}
                    <hr/>
                    {
                        this.state.list.map(
                            (info, index) => 
                            <PureItem
                                // key={index}
                                key={info.userID}
                                info={info} 
                                infoConent={`${info.name}/${info.price}/${info.videos}/${info.teacher}`}
                            />
                        )
                    }
                    <button onClick={this.removeFirst}>removeFirst</button>
                    <button onClick={this.addInfoFour}>addInfoFour</button>
                    <button onClick={this.updateInfoFour}>updateInfoFour</button>
                    <hr/>
                    <h3>6. 陣列物件 JOSN 字串化、pre排版</h3>
                    { JSON.stringify(infos) }
                    <br/>
                    <pre>
                        { JSON.stringify(infos, null, 3) }
                    </pre>
                </ul>
            </div>
        );
    }
}

export default ListRendering;