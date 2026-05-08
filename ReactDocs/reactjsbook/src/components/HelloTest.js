import React from "react";
export default function HelloTest(props) {
    if (props.name) {
        return <h1>你好，{props.name}！</h1>;
    } else {
        return <span>嘿，陌生人</span>;
    }
}