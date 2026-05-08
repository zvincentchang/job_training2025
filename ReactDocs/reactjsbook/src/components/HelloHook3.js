import CounterHook from "./CounterHook";
import {ContextProvider} from "./ReducerHook";
import MemoHook from "./MemoHook";
import RefHook from "./RefHook";
export default function HelloHook3() {
    return (
        <div>
            <h3>Hook API的综合示例</h3>
            <CounterHook initialCount={1}/>
            <h3>useReducer</h3>
            <ContextProvider children={2}/>
            <h3>useMemo</h3>
            <MemoHook />
            <h3>useRef</h3>
            <RefHook/>
        </div>
    );
}