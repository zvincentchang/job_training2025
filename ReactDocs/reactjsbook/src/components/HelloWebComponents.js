import React from "react";
import {BrickFlipbox, HelloMessage} from "./WebComponentsEx";
export default function HelloWebComponents() {
    return (
        <div>
            <hr/>
            <h3>Web Components示例</h3>
            <h3>示例1</h3>
            <HelloMessage name={"React"}/>
            <h3>示例2</h3>
            <BrickFlipbox/>
        </div>
    )
}