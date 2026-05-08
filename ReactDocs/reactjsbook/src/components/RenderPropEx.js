import React from "react";
class MouseTracker1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}
// <Mouse> 组件封装了需要的行为
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {/*渲染 <p> 以外的东西 */}
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}
class MouseTracker2 extends React.Component {
    render() {
        return (
            <>
                <h1>移动鼠标!</h1>
                <Mouse />
            </>
        );
    }
}
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src=".//cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="es-lint want to get"/>
        );
    }
}
class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <Cat mouse={this.state} />
            </div>
        );
    }
}
class MouseTracker3 extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <MouseWithCat />
            </div>
        );
    }
}
class Cat2 extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            //准备一张图片cat.jpg放在项目的public目录下
            <img src="../cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="es-lint want to get"/>
        );
    }
}
class Mouse2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {/*
         不是提供静态的<Mouse>渲染方法
          使用render props动态决定渲染的内容
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}
class MouseTracker4 extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}
// 如果出于某种原因需要 HOC
// 使用具有 render props 的普通组件创建一个 HOC
function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )}/>
            );
        }
    }
}
class MouseTracker5 extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>

                {/*
          这是不好的做法
          每个渲染的render props的值将会是不同
        */}
                <Mouse2 render={mouse => (
                    <Cat2 mouse={mouse} />
                )}/>
            </div>
        );
    }
}
class MouseTracker6 extends React.Component {
    // 定义实例方法.renderTheCat()方法
    // 在渲染中使用它时，它指的是相同的函数
    renderTheCat(mouse) {
        return <Cat mouse={mouse} />;
    }
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderTheCat} />
            </div>
        );
    }
}
export {MouseTracker1,MouseTracker2,MouseTracker3,MouseTracker4,MouseTracker5,MouseTracker6,withMouse}