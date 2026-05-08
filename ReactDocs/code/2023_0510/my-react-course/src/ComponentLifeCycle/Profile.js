import React, { Component } from 'react';

class Profile extends Component {

    // 一、constructor 建構函式(Mounting)
    constructor(props){
        console.log("1.constructor 建構函式(Mounting:掛載)");
        super(props);
        // 針對state做初始化設計欄位
        this.state = {
            userID: 1,
            userData: { }
        };
    }


    // 三、componentDidMount 組件掛載(Mounting)
    // 組件掛載(Mounting)"新增監聽"
    componentDidMount() {
        console.log("3.componentDidMount 組件掛載(Mounting:掛載)");
        window.addEventListener('submit', this.revertUser);
        this.fetchUser(1);
    }


    // 四、componentDidUpdate 組件更新(Updating)
    // 1.可用於比較與前一次props、state的值,用以判斷是否要更新this.setState()籍此再次觸發render()渲染畫面更新
    // 2.prevProps:父層組件更新抓取前一次props
    // 3.prevState:組件自身更新抓取前一次state
    componentDidUpdate(prevProps, prevState) {
        console.log("4.componentDidUpdate 組件更新(Updating:更新)");
        console.log("prevState userID:", prevState.userID);
        console.log("state userID:", this.state.userID);
        if(prevState.userID !== this.state.userID){
            console.log("componentDidUpdate 組件更新(執行fetchUser)");
            this.fetchUser(this.state.userID);
        }

        // 上一個與下一個 props 欄位值比較
        // if(prevProps.xxx !== this.props.xxx){ ... }        
    }

    addUserID = () => {
        // 此處僅須更新state userID並交由componentDidUpdate判斷更新
        this.setState({
            userID: this.state.userID + 1
        });
    }

    revertUser = (e) => {
        e.preventDefault(); // 避免表單送出預設跳頁行為
        // 判斷若當下的user非1號才還原(避免componentDidUpdate被觸發)
        if(this.state.userID !== 1){
            this.setState({
                userID: 1
            });
        }
    };

    fetchUser = async (userID) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`).then(rs => rs.json());
        this.setState({
            userData: data
        });
    };


    // 五、組件卸載(Unmounting)"移除監聽"
    // 組件離開的時候呼叫
    componentWillUnmount(){
        console.log("5.componentWillUnmount 組件卸載(Unmounting:卸載)");
        window.removeEventListener('submit', this.revertUser);
    }


    // 二、render 渲染函式(Mounting、Updating)
    render() {
        console.log("2.render 渲染函式(Mounting:掛載、Updating:更新)");
        const {userID,userData} = this.state;
        return (
            <div>
                <h3>{userID}</h3>                
                <button onClick={this.addUserID}>addUserID</button>
                <hr/>
                <form>                    
                    <button type='submit'>revertUser</button>
                </form>
                <ul>
                    <li>{userData.id}</li>
                    <li>{userData.title}</li>
                    <li>{userData.body}</li>
                </ul>
            </div>
        );
    }
}

export default Profile;