import React from "react";
import * as ReactDOM from "react-dom";
class HelloMessage extends React.Component {
    render() {
        return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
    }
}
function BrickFlipbox() {
    return (
        <brick-flipbox class="demo">
            <div>front</div>
            <div>back</div>
        </brick-flipbox>
    );
}
class XSearch extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
    }
}
customElements.define('x-search', XSearch);
export {HelloMessage,BrickFlipbox,XSearch}