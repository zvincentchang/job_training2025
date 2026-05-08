import React from "react";
class Base1 extends React.Component {
    render() {
        return "hello,text!"
    }
}
// HOC函数实现2.0版
const toUpperCaseHoc = function(WrappedComponent) {
    return class Hoc extends React.Component {
        render() {
            const { text } = this.props;
            const text2Upper = text.toUpperCase();
            return <WrappedComponent text={text2Upper} />;
        }
    };
};
// 实现1.0版
class Base2 extends React.Component {
    render() {
        return this.props.text;
    }
}
// 用HOC包装后生成的新的组件，符合2.0版需求，同时包含了1.0版其他功能
const HelloWorld2Upper = toUpperCaseHoc(Base2);
export {Base1,Base2,HelloWorld2Upper}