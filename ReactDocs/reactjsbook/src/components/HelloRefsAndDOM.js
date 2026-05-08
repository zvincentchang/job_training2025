import React from "react";
import {AutoFocusTextInput, CustomTextInput2, MyComponent} from "./RefsAndDOMEx";
import {Parent} from "./PortalsExample";
export default function HelloRefsAndDOM() {
    return (
        <div>
            <hr/>
            <h3>Refs和DOM示例</h3>
            <h3>示例1</h3>
            <MyComponent/>
            <h3>示例2</h3>
            <AutoFocusTextInput/>
            <h3>示例3</h3>
            <CustomTextInput2/>
            <h3>示例4</h3>
            <Parent/>
        </div>
    )
}