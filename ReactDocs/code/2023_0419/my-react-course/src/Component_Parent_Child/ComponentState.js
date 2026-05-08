import React, { Component } from 'react';

class ComponentState extends Component {

    state = {
        count : 0
    };
    
    counterAdd = () => {

        // setState 本身為非同步,所以呼叫setState兩次count也不會是2
        // this.setState({
        //     count: this.state.count + 1
        // });
        
        // this.setState({
        //     count: this.state.count + 1
        // });

        
        // 1.setState 可傳入 arrow function 改為同步更新
        // state => 後面接 "小括弧()" 內的 "大括弧{}" 表示回傳的是物件
        this.setState( state => ({
            count: state.count + 1 
        }));

        this.setState( state => ({
            count: state.count + 1 
        }));

        // 傳統標準回傳寫法
        /*
        this.setState((state) => {
            showDate('One');
            
            return {
                count: state.count + 1
            };
        });

        this.setState((state) => {
            showDate('Two');

            return {
                count: state.count + 1
            };
        });

        const showDate = async (sateName) => {
            await setTimeout(() => console.log("setState "+ sateName + ":", new Date()), 3000);
        };
        */

        // 2.setState 可傳入第二個參數 callback function(回調函數)
        // 可確保 setState 確實有更新完才呼叫別的動作
        // this.setState( state => 
        //     ({ count: state.count + 1 }),
        //     () => {
        //         console.log("--- setStateOne ---");
        //         this.printCount();     
        //     }
        // );

        // this.setState( state => 
        //     ({ count: state.count + 1 }),
        //     () => {
        //         console.log("--- setStateTwo ---");
        //         this.printCount();
        //     }
        // );

    };

    printCount = () => {
        console.log("PrintCount Count:", this.state.count);
    };

    // 點幾次就加多少
    render() {
        return (
            <div>
                <h1>Counter： {this.state.count}</h1>
                <button onClick={this.counterAdd}>Counter Add Count</button>
            </div>
        );
    };
}

export default ComponentState;