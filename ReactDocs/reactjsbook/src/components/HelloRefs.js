import React from "react";
import {CustomTextInput, FancyButton} from "./RefsExample";
const ref = React.createRef();
export default function HelloRefs() {
    return (
        <div>
            <hr/>
            <h3>Refs转发示例</h3>
            <FancyButton ref={ref} >Refs转发示例</FancyButton>
            <h3>高阶组件Refs转发示例</h3>
            <CustomTextInput />
        </div>
    )
}