/* eslint-disable no-unused-vars */
import { useState } from 'react';
const infoMap= {
    beginInfo:'您已经单击了',
    endInfo:'次按钮。',
    btnInfo:'计数器',
    beforeInfo:'猴子已经吃了',
    afterInfo:'根香蕉',
    ageInfo:'年龄',
    fruitInfo:'水果',
    doInfo:'待办事项:',
}
export default function HookExample11() {
    // 声明一个新的叫作 “count” 的 state 变量
    const [count, setCount] = useState(0);
    // 声明多个 state 变量
    const [banana, setBanana] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    //const [todolists] = useState([{ text: '学习 Hook' }]);
    const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
    function handleOrangeClick() {
        // 和 this.setState({ fruit: 'orange' }) 类似
        if(fruit==='banana') {
            setFruit('orange');
        } else {
            setFruit('banana');
        }
    }
    function handleDoClick() {
        alert('学习 React')

    }
    return (
        <div>
            <div>{infoMap.beginInfo}{count}{infoMap.endInfo}</div>
            <button onClick={() => setCount(count + 1)}>
                {infoMap.btnInfo}
            </button>
            <div>{infoMap.beforeInfo}{banana}{infoMap.afterInfo}</div>
            <button onClick={() => setBanana(banana + 1)}>
                {infoMap.btnInfo}
            </button>
            <div>{infoMap.ageInfo}{age}</div>
            <button onClick={() => setAge(age + 1)}>
                {infoMap.ageInfo}
            </button>
            <div>{infoMap.fruitInfo}{fruit}</div>
            <button onClick={handleOrangeClick}>
                {infoMap.fruitInfo}
            </button>

            <p>{infoMap.doInfo}</p>
            <button onClick={handleDoClick}>
                {infoMap.doInfo}
            </button>
        </div>
    );
}