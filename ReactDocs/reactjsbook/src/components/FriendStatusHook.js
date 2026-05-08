import { useState, useEffect } from 'react';
const infoMap= {
    idInfo:1,
    subscribeToFriendStatusInfo:'Hook中的subscribeToFriendStatus方法',
    unsubscribeFromFriendStatusInfo:'Hook中的unsubscribeFromFriendStatus方法',
    loadInfo:'装载...',
    onInfo:'在线',
    offInfo:'离线'
}
function subscribeToFriendStatus(id, handleStatusChange,status){
    console.log(infoMap.idInfo);
    console.log(infoMap.subscribeToFriendStatusInfo);
    handleStatusChange(status);
}
function unsubscribeFromFriendStatus(id, handleStatusChange,status){
    console.log(infoMap.idInfo);
    console.log(infoMap.unsubscribeFromFriendStatusInfo);
    handleStatusChange(status);
}
export default function FriendStatusHook(props) {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        // eslint-disable-next-line no-restricted-globals
        subscribeToFriendStatus(props.id, handleStatusChange,status);
        return function cleanup() {
            // eslint-disable-next-line no-restricted-globals
            unsubscribeFromFriendStatus(props.id, handleStatusChange,status);
        };
    });
    if (isOnline === null) {
        return infoMap.loadInfo;
    }
    return isOnline ? infoMap.onInfo : infoMap.offInfo;
}