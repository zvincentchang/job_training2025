import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
it("渲染用户数据", async () => {
    const fakeUser = {
        name: "Joni Baez",
        age: "32",
        address: "123, Charming Avenue"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );
    // 使用异步的 act()方法应用执行成功的 promise
    await act(async () => {
        render(<User id="123" />, container);
    });
    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);
    // 清理 mock 以确保测试完全隔离
    global.fetch.mockRestore();
});