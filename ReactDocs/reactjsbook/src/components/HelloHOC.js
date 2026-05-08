import React from "react";
import {Base1, HelloWorld2Upper} from "./HOCExample";
export default function HelloHOC() {
    return (
        <div>
            <hr/>
            <h3>HOC示例</h3>
            <h3>非高阶组件</h3>
            <Base1/>
            <h3>高阶组件</h3>
            <HelloWorld2Upper text="hello,HOC!" />
        </div>
    )
}