import React from "react";
function handleClick(){
    alert("Refs 转发示例")
}
//通过调用React.createRef()方法创建了一个ref并将其赋值给变量FancyButton 
//再通过指定 ref 为 JSX 属性将其向下传递给<button>
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={handleClick}>
        {props.children}
    </button>
));
const Input = InputComponent => {
    const forwardRef = (props, ref) => {
        const onType = () => console.log(ref.current.value);
        return <InputComponent forwardedRef={ref} onChange={onType} {...props} />;
    };
    return React.forwardRef(forwardRef);
};
const TextInput = ({ forwardedRef, children, ...rest }) => (
    <div>
        <input ref={forwardedRef} {...rest} />
        {children}
    </div>
);
const InputField = Input(TextInput);
class CustomTextInput extends React.Component {
    render() {
        const inputRef = React.createRef();
        return <InputField ref={inputRef} />;
    }
}
export {FancyButton,CustomTextInput}