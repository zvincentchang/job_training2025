import HookExample2 from "./HookExample2";
import SameExample2 from "./SameExample2";
import FriendStatusHook from "./FriendStatusHook";
import SameFriendStatus from "./SameFriendStatus";

export default function HelloHook2() {
    return (
        <div>
            <h1>Effect Hook的综合示例</h1>
            <hr/>
            <HookExample2/>
            <hr/>
            <h1>等价实现计数器</h1>
            <SameExample2/>
            <hr/>
            <h1>需要清除的 effect</h1><hr/>
            <FriendStatusHook id={1}/>
            <h1>需要清除的 effect的等价实现</h1>
            <SameFriendStatus id={1}/>
        </div>
    );
}