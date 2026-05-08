import React from 'react';
const infoMap= {
    idInfo:1,
    subscribeToFriendStatusInfo:'class中的subscribeToFriendStatus方法',
    unsubscribeFromFriendStatusInfo:'class中的unsubscribeFromFriendStatus方法',
    loadInfo:'装载...',
    onInfo:'在线',
    offInfo:'离线'
}
function subscribeToFriendStatus(id, handleStatusChange,status){
    console.log(infoMap.idInfo);
    console.log(infoMap.subscribeToFriendStatusInfo);
    //handleStatusChange(status);
}
function unsubscribeFromFriendStatus(id, handleStatusChange,status){
    console.log(infoMap.idInfo);
    console.log(infoMap.unsubscribeFromFriendStatusInfo);
    //handleStatusChange(status);
}
export default class SameFriendStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: true};
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidMount() {
        subscribeToFriendStatus(this.props.id, this.handleStatusChange,this.status);
    }
    componentWillUnmount() {
        unsubscribeFromFriendStatus(this.props.id, this.handleStatusChange,this.status);
    }
    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }
    render() {
        if (this.state.isOnline === null) {
            return infoMap.loadInfo;
        }
        return this.state.isOnline ? infoMap.onInfo : infoMap.offInfo;
    }
}