import React from "react";
import {Link} from "react-router-dom";
export function Home() {
    return (
        <div>
            <h1>React Router 示例</h1>
            <a href="/childrenEx">有下级（二级）路由的示例</a><br/>
            <Link to="linkEx">没有下级路由，使用Link的示例</Link><br/>
            <a href="/aHrefEx">没有下级路由，使用超链接的示例</a><br/>
        </div>
    );
}
export function ChildrenEx() {
    return (
        <div>
            <h1>有下级（二级）路由的示例</h1>
            <Link to="history">路由</Link><br/>
            <Link to="services">组件</Link>
        </div>
    );
}
export function LinkEx() {
    return (
        <div>
            <h1>没有下级路由，使用Link的示例</h1>
        </div>
    );
}
export function AHrefEx() {
    return (
        <div>
            <h1>没有下级路由，使用超级链接的示例</h1>
        </div>
    );
}
export function Services() {
    return (
        <section>
            <h2>组件</h2>
            <p>
                多个组件保存在一起，在文件page.js中。
            </p>
        </section>
    );
}
export function History() {
    return (
        <section>
            <h2>路由</h2>
            <p>
                路由信息保存在一起，在文件App.js中。
            </p>
        </section>
    );
}