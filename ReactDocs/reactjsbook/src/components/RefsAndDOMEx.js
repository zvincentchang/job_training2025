import React from "react";
//创建 ref
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
//为 DOM 元素添加 ref
//在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。
//ref 会在 componentDidMount()方法 或 componentDidUpdate()方法触发前更新。
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点，通过current来访问 DOM 节点
        this.textInput.current.focus();
    }
    render() {
        // 告诉 React 把 <input> ref 关联到构造方法里创建的textInput上
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="前面的文本框获得焦点"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
//为类组件添加ref
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}
//回调 ref
class CustomTextInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        this.focusTextInput = () => {
            // 使用原生 DOM API 使 text 输入框获得焦点
            if (this.textInput) this.textInput.focus();
        };
    }
    componentDidMount() {
        // 组件挂载后，让文本框自动获得焦点
        this.focusTextInput();
    }
    render() {
        // 使用ref的回调函数将 text 输入框 DOM 节点的引用存储到 React
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="前面的文本框获得焦点"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
function CustomTextInput3(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}
class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput3
                inputRef={el => this.inputElement = el}
            />
        );
    }
}
export {MyComponent,AutoFocusTextInput,CustomTextInput2,Parent}