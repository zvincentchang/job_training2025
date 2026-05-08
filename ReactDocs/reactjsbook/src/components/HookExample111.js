import { useState } from 'react';
const infoMap= {
    beginInfo:'您已经单击了',
    endInfo:'次按钮。',
    btnInfo:'计数器',
    beforeInfo:'猴子已经吃了',
    afterInfo:'根香蕉',
    ageInfo:'年龄',
    fruitInfo:'水果',
    doInfo:'待办事项',
}
export default function HookExample111() {
    let fruitStateVariable = useState('banana'); // 返回一个有两个元素的数组
    let fruit = fruitStateVariable[0]; // 数组里的第一个值
    let setFruit = fruitStateVariable[1]; // 数组里的第二个值
    function handleOrangeClick() {
        if(fruit==='banana') {
            setFruit('orange');
        } else {
            setFruit('banana');
        }
    }
    return (
        <div>
            <p>{infoMap.fruitInfo}{fruit}</p>
            <button onClick={handleOrangeClick}>
                {infoMap.fruitInfo}
            </button>
        </div>
    );
}