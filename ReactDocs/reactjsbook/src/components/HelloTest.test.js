//import React from "react";
import * as React from "react";

import   { unmountComponentAtNode, render} from "react-dom";
import { act } from "react-dom/test-utils";
import HelloTest from "./HelloTest";
let container = null;



beforeEach(() => {
    // 创建一个 DOM 元素作为渲染目标
    container = document.createElement("div");
    document.body.appendChild(container);


});
afterEach(() => {
    // 退出时进行清理
   unmountComponentAtNode(container);

     container.remove();
     container = null;
});
it("渲染有或无名称", () => {
    act(() => {
         render(<HelloTest />, container);
    });
    expect(container.textContent).toBe("嘿，陌生人");
    act(() => {
        render(<HelloTest name="Jenny" />, container);
    });
    expect(container.textContent).toBe("你好，Jenny！");
    act(() => {
         render(<HelloTest name="Margaret" />, container);

    });
    expect(container.textContent).toBe("你好，Margaret！");
});