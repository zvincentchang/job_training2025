import {connect} from 'react-redux'  //需要安装对应的包
import Counter from '../components/Counter'
import {incActionGenerator,decActionGenerator} from "../actions/Action";
const mapStateToProps=(state)=>({
    title:state.title,
    info:state.info,
    value:state.value
})
const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(incActionGenerator()),
    onDecClick:()=>dispatch(decActionGenerator())
})
const MyCounterApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default MyCounterApp;