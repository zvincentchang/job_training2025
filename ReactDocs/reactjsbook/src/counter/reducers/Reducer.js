import {
    INCREASE, DECREASE
} from "../actions/Action";
const changeValue=(state={title:'React+Redux实现简易计数器',info:'数值为：',value:0},action)=>{
    switch(action.type){
        case INCREASE:
            return {...state,value:state.value+1};
        //return {value:state.value+1};//也可以这样写
        case DECREASE:
            return {...state,value:state.value-1};
        default:
            return state;
    }
}
export default changeValue;