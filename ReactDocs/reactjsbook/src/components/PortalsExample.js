import React from "react";
import * as ReactDOM from "react-dom";
const modalRoot = document.getElementById('root');
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
// Modal 所有子元素被挂载后，protal元素会被嵌入到 DOM 树中，
        // 子元素将被挂载到一个分离的 DOM 节点中。
        // 如果要求子组件在挂载时可以立刻接入 DOM 树，
        // 例如衡量一个 DOM 节点，
        // 或者在后代节点中使用autoFocus，
        // 则需添加 state 到 Modal 中，
        // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // 当子元素里的按钮被单击时，
        // 这个将会被触发更新父元素的 state，
        // 即使这个按钮在 DOM 中不是直接关联的后代
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <p>单击按钮的次数： {this.state.clicks}</p>
                <p>
                    打开浏览器的“开发者工具”功能观察button的归属。
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        );
    }
}
function Child() {
    // 这个按钮的单击事件会冒泡到父元素，因为这里没有定义onClick属性。
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}
export {Parent}