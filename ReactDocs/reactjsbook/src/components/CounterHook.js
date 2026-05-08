import {useState} from "react";
const infoMap={
    inParamsInfo:'传入的初始值是：',
    nowInfo:'现在的结果: ',
    middleInfo:'，',
    resetInfo:'重置',
    addInfo:'减一',
    subInfo:'加一',
}
export default function Counter( props) {
    let initialCount=props.initialCount;
    const [count, setCount] = useState(initialCount);
    return (
        <>
            {infoMap.inParamsInfo}{initialCount}{infoMap.middleInfo}
            {infoMap.nowInfo}{count}{infoMap.middleInfo}
            <button onClick={() => setCount(initialCount)}>{infoMap.resetInfo}</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>{infoMap.subInfo}</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>{infoMap.addInfo}</button>
        </>
    );
}