import React, { Component } from 'react';

class withOpen extends Component {

    state = {
        open: false
    };

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {

        const { WrappedComponent } = this.props;

        return (
            <WrappedComponent 
                {...this.props}
                open = {this.state.open }
                toggleOpen = {this.toggle}
            />
        )
    }
}

export default withOpen;




// WrappedComponent 傳入子組件 ReactImgView、VueImgView
// const withOpen = (WrappedComponent) => {
//     // 回傳一個組件結果
//     // class extends Component(Anonymous class匿名類別)
//     return class extends Component {

//         state = {
//             open: false
//         };
    
//         toggle = () => {
//             this.setState({
//                 open: !this.state.open
//             });
//         };

//         /*
//         {...this.props} 必須傳入
//         連同最上層組件(HocAppOne topField),在傳入給下層組件時才會繼續傳遞下層組件
//         */
//         render() {
//             return (
//                 <WrappedComponent 
//                     {...this.props}
//                     open = {this.state.open }
//                     toggleOpen = {this.toggle}
//                 />
//             )
//         }
//     };
// };

// export default withOpen;