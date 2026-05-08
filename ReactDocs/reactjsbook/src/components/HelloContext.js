import React from "react";
import {AppContext1, AppContext2} from "./ContextExample";
export default function HelloContext() {
    return (
        <div>
            <h3>Context示例</h3>
            <h3>AppContext1</h3>
            <AppContext1/>
            <h3>AppContext2</h3>
            <AppContext2/>
        </div>
    );
}