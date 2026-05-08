import React, { Component } from 'react';

class ComponentLifeCycle extends Component {

    constructor(props){
        console.log("1.constructor 建構函式(Mounting:掛載)");
        super(props);
        // 針對state做初始化設計欄位
        this.state = { count: 0, users: [
            {
                "id": 5,
                "username": "Kamren",
                "address": {
                  "zipcode": "33263",  
                }
              }
        ]};

        // 將AddCount綁定Component組件自已,或用箭頭函式取代
        this.AddCount = this.AddCount.bind(this);
    }

    /*
        三、componentDidMount 組件掛載(Mounting:掛載)
        如果需要從後端請求資料的話,此處適合進行網路請求(network request)以及新增監聽addEventListener
        可以在 componentDidMount() 內呼叫 setState()。這會觸發一次額外的 render，這會在瀏覽器更新螢幕之前發生。
        在這個情況下，即使 render() 被呼叫兩次，這確保使用者不會看見這兩次 render 中過渡時期的 state。
    */
    componentDidMount(){
        console.log("3.componentDidMount 組件掛載(Mounting:掛載)");
        this.fetchList();
    }

    fetchList = async () => {
        const data = await fetch('http://jsonplaceholder.typicode.com/users').then(rs => rs.json());
        // console.log("data:",data);

        this.setState({
            users: data
        });
    }

    AddCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    // AddCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // };

    render() {
        console.log("2.render 渲染函式(Mounting:掛載、Updating:更新)");
        const { count, users } = this.state;
        return (
            <div>
               <h3>{count}</h3>
               <button onClick={this.AddCount}>AddCount</button>
               <hr/>
               <ul>
                {users.map(u => <li>{ `${u.id} / ${u.username} / ${u.address.zipcode}` }</li>)}
               </ul>
            </div>

        );
    }
}

export default ComponentLifeCycle;