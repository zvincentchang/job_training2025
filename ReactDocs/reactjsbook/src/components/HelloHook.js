import HookExample1 from "./HookExample1";

import SameExample1 from "./SameExample1";
import HookExample11 from "./HookExample11";
import HookExample111 from "./HookExample111";
function HelloHook() {

    return (


         <div>
            <h1>State Hook的综合示例</h1>
            <hr/>
            <HookExample1/>
            <hr/>
            <h1>等价实现计数器</h1>
            <SameExample1/>
            <hr/>
            <h1>多个state值的应用开发</h1>
            <HookExample11/>
            <hr/>
            <h1>state Hook的数组解构实现</h1>
            <HookExample111/>
        </div>
    );

}
export default HelloHook;