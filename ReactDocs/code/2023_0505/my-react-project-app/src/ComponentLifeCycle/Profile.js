import React, { Component } from 'react';

class Profile extends Component {

    constructor(props){
        console.log("1.constructor 建構函式(Mounting:掛載)");
        super(props);
        this.state= {
            userID: 1,
            userData: {}
        }
    }

    componentDidMount(){
        console.log("3.componentDidMount 組件掛載(Mounting:掛載)");
        window.addEventListener('submit', this.revertUser);
        this.fetchUser(this.state.userID);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("4.componentDidUpdate 組件更新(Updating :更新)");
        console.log("prevState userID:", prevState.userID);
        console.log("state userID:", this.state.userID);
        if(prevState.userID !== this.state.userID){
            this.fetchUser(this.state.userID);
        }
    }

    componentWillUnmount(){
        console.log("5.componentWillUnmount 組件卸載(Unmounting:卸載)!");
        window.removeEventListener('submit', this.revertUser);
    }

    addUserID = () => {
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


    render() {
        console.log("2.render 渲染函式(Mounting :掛載、Updating:更新)");
        const { userID, userData } = this.state;
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
    };

};

export default Profile;