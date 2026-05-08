import React, { Component } from "react";
import Item from './Item';
import PureItem from './PureItem';

const steps = [
    'Learn JavaScript',
    'Learn React',
    'Make Money',
    'Buy a House'
];

const infoOne = { userID: 1, name: 'Angular', price: 3200, videos: 60, teacher: 'scars'};
const infoTwo = { userID: 2, name: 'React', price: 5500, videos: 75, teacher: 'Shang' };
const infoThree = { userID: 3, name: 'Vue', price: 4500, videos: 45, teacher: 'Mark' };
const infoFour = { userID: 4, name: 'Java', price: 6500, videos: 55, teacher: 'YuShangLee' };
const infos = [infoOne, infoTwo, infoThree];


// 上層組件
// List Rendering 列表渲染
// map javascript 陣列內建函式
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
                list: [...this.state.list, infoFour]
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

    render(){
        return (
            <div>
                {/* <h3>1.文字陣列map走訪元素</h3>
                {steps.map(
                     // 參數一:陣列元素、參數二:陣列索引值
                     (text, index) => <Item>{index} : {text}</Item> 
                )}
                <hr/>

                <h3>2.物件 key/value map走訪元素</h3>
                {Object.keys(infoOne).map( (infoKey) => { 
                        const infoValue = infoOne[infoKey];
                        return <Item>{infoKey} : {infoValue}</Item>;
                    }
                )} */}
                {/* 透過物件欄位抓值 */}
                {/* {infoOne.name}、{infoOne.price}、{infoOne.teacher}
                <hr/>

                <h3>3.物件陣列map走訪元素</h3>
                {infos.map(
                     (info) => <Item>{info.userID}、{info.name}、{info.price}、{info.teacher}</Item>
                )}
                <hr/>
                
                <h3>4.物件陣列解構map走訪元素</h3>
                {infos.map(
                     ({userID,name,price,videos,teacher}) => <Item>{userID}、{name}、{price}、{videos}、{teacher}</Item>
                )}
                <hr/> */}

                {/*                     
                    1.組件屬性key作用:讓每一個render的物件都認得與資料的連結
                    2.移除第一個ItemObj的時候，其它ItemObj不該重新被render,使用key(須為唯一值)搭配 PureComponent                    
                    3.不因該使用陣列索引值index當作key(只能避免Warning，但Component一樣會render)，必須要從物件挑選唯一值資料欄位當做key
                    4.若未宣告屬性key將顯示警告訊息(Warning: Each child in a list should have a unique "key" prop.)
                    PS.前後`頓號`表示為字串模版，透過${}抓值
                */}
                <h3>5.物件陣列map走訪元素組件key屬性</h3>
                {this.state.list.map(
                     (info, index) => 
                                <PureItem 
                                    // key={index}
                                    key={info.userID}
                                    info={info} 
                                    infoConent={`${info.name}/${info.price}/${info.videos}/${info.teacher}`}
                                />
                )}
                <button onClick={this.removeFirst}>removeFirst</button>
                <button onClick={this.addInfoFour}>addInfoFour</button>
                <button onClick={this.updateInfoFour}>updateInfoFour</button>
                <hr/>
                
                <h3>6.陣列物件 JOSN 字串化、pre排版</h3>
                {JSON.stringify(infos)}
                <hr/>
                <h3>參數二(replacer):將指定的欄位刪除、參數三(space):JSON欄位縮排空格數</h3>
                <pre>{JSON.stringify(infos, null, 3)}</pre>

            </div>
            
        )
    }
}

export default ListRendering;