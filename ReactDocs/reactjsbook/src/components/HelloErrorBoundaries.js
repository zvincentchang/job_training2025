import React from "react";
import {ErrorBoundary, MyComponent} from "./ErrorBoundariesEx";
export default function HelloErrorBoundaries() {
    return (
        <div>
            <h3>Error Boundaries示例</h3>
            <h3>示例1</h3>
            <MyComponent/>
            <ErrorBoundary><div>示例2</div></ErrorBoundary>
        </div>
    );
}