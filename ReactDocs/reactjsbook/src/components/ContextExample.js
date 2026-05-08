import React from "react";
import {Button} from "react-bootstrap";
class AppContext1 extends React.Component {
    render() {
        return <Toolbar1 theme="dark" />;
    }
}
function Toolbar1(props) {
    // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
    // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
    // 因为必须将这个值层层传递所有组件。
    return (
        <div>
            <ThemedButton1 theme={props.theme} />
        </div>
    );
}
class ThemedButton1 extends React.Component {
    render() {
        return <Button theme={this.props.theme} >Context1</Button>;
    }
}
// 利用context 可以让无须明确地传遍每一个组件，就能将值传递进组件树。
// 为当前的 theme 创建一个 context，默认值为light
const ThemeContext = React.createContext('light');
class AppContext2 extends React.Component {
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给组件树
        // 无论多深，任何组件都能读取这个值
        // 将 dark作为当前的值传递下去
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar2 />
            </ThemeContext.Provider>
        );
    }
}
// 中间的组件再也不必指明往下传递 theme 了
function Toolbar2() {
    return (
        <div>
            <ThemedButton2 />
        </div>
    );
}
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#cc0033',
        background: '#222222',
    },
};
const ThemeContext2 = React.createContext(
    themes.dark // 默认值
);
class ThemedButton2 extends React.Component {
    // 指定 contextType 读取当前的 theme context
    // React会往上找到最近的 theme Provider，然后使用它的值
    //当前的 theme 值为dark
    static contextType = ThemeContext2;
    render() {
        return <Button theme={this.context}>Context2</Button>;
    }
}
export { AppContext1,AppContext2} ;