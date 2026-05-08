import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }
    componentDidCatch(error, errorInfo) {
        //也可以将错误日志上报给服务器
        alert(error+errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return <h1>{this.props.children}</h1>;
    }
}
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        try {
            // 执行操作，如有错误则会抛出
        } catch (error) {
            this.setState({ error });
        }
    }
    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}
export {ErrorBoundary,MyComponent}