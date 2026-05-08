import React, { Component } from 'react';

class ComponentLifeCycle extends Component {

    /*
        一、constructor 建構函式(Mounting:掛載)規則、用法
        1.一定要呼叫super(props)
        2.會傳入props參數
        3.指定 this.state 針對 state 做初始化設計欄位
        4.綁定自訂義函式 bind(this),可用箭頭函式取代,目的讓this為Component自已
        5.不要做 this.setState({})
        6.不要將props指定到state裡面 this.state={count:props.count},直接在render()函數裡使用this.props
        7.不要去呼叫資料 fetch ajax 函式
    */
    constructor(props){
        console.log("1.constructor 建構函式(Mounting:掛載)");
        super(props);
        // 針對state做初始化設計欄位
        this.state = { count: 0, users: [] };

        // 將handleClick綁定Component組件自已,或用箭頭函式取代
        this.handleClick = this.handleClick.bind(this);
    }

    /*
        三、componentDidMount 組件掛載(Mounting:掛載)
        如果需要從後端請求資料的話,此處適合進行網路請求(network request)以及新增監聽addEventListener
        可以在 componentDidMount() 內呼叫 setState()。這會觸發一次額外的 render，這會在瀏覽器更新螢幕之前發生。
        在這個情況下，即使 render() 被呼叫兩次，這確保使用者不會看見這兩次 render 中過渡時期的 state。
    */
    componentDidMount() {
        console.log("3.componentDidMount 組件掛載(Mounting:掛載)");
        this.fetchList();
    }

    fetchList = async () => {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.setState({
            users: data
        });
    }

    // 建議使用函式取代就可以不用寫bind(this)綁定
    // handleClick = () => {
    //     this.setState({
    //         count: this.state.count+1
    //     });
    // };

    // 若未透過constructor bind(this)綁定,則這邊的this指的是button它自已
    handleClick() {
        this.setState({
            count: this.state.count+1
        }, 
        () => {
            // setState可傳入第二參數Callback函式以確保State有更新後再執行別的事情
            console.log("setState!");
        });
    };

    /*
        二、render 渲染函式(Mounting:掛載、Updating:更新)
        1.解構取值 this.props、this.state
        2.不要做 this.setState({})
        3.不要去呼叫資料 fetch ajax 函式
        4.專責做畫面呈現
    */
    render() {
        console.log("2.render 渲染函式(Mounting:掛載、Updating:更新)");
        // this.props;
        const { users } = this.state;

        // 要回傳一個JSX元素
        // React16之後可以回傳陣列元素
        return [
            <div key={1}>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>AddCount</button>
            </div>,
            <ul key={2}>
                {users.map((user) => 
                    <li key={user.id}> {user.id} : {user.name} / {user.address.zipcode}</li>
                )}
            </ul>
        ];
    }

}

export default ComponentLifeCycle;