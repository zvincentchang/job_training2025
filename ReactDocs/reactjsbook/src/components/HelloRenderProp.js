import React from "react";
import {MouseTracker1, MouseTracker2, MouseTracker3, MouseTracker4, MouseTracker5, MouseTracker6} from "./RenderPropEx";
export default function HelloRenderProp() {
    return (
        <div>
            <hr/>
            <h3>Render Prop示例</h3>
            <h3>示例1</h3>
            <MouseTracker1/>
            <h3>示例2</h3>
            <MouseTracker2/>
            <h3>示例3</h3>
            <MouseTracker3/>
            <h3>示例4</h3>
            <MouseTracker4/>
            <h3>示例5</h3>
            <MouseTracker5/>
            <h3>示例6</h3>
            <MouseTracker6/>
        </div>
    )
}