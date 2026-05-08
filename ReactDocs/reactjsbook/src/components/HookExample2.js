import {useEffect, useState} from 'react';
const infoMap= {
    beginInfo: '您已经单击了',
    endInfo: '次按钮。',
    btnInfo: '计数器',
}
function HookExample2() {
    const [count, setCount] = useState(0);
    // 相当于componentDidMount()方法和 componentDidUpdate()方法：
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = infoMap.beginInfo+`${count}`+infoMap.endInfo;
    });
    return (
        <div>
            <div>{infoMap.beginInfo}{count}{infoMap.endInfo}</div>
            <button onClick={() => setCount(count + 1)}>
                {infoMap.btnInfo}
            </button>
        </div>
    );
}
export default HookExample2;