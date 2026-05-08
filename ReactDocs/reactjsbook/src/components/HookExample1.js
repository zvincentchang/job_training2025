//引入React中的useState Hook，使得可以在函数组件中存储内部 state
import { useState } from 'react';
const infoMap= {
    beginInfo:'您已经单击了',
    endInfo:'次按钮。',
    btnInfo:'计数器',
}
function HookExample1() {
    // 声明一个新的叫作 “count” 的 state 变量
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{infoMap.beginInfo}{count}{infoMap.endInfo}</p>
            <button onClick={() => setCount(count + 1)}>
                {infoMap.btnInfo}
            </button>
        </div>
    );
}
export default HookExample1;