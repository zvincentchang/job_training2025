import React from "react";
class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}
class Columns extends React.Component {
    render() {
        return (
            <div>
                <td>Hello</td>
                <td>World</td>
            </div>
        );
    }
}
class Columns2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
        );
    }
}
class Columns3 extends React.Component {
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );
    }
}
function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // 没有`key`，React 会发出一个关键警告
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}
export { Table,Columns3,Columns2,Columns,Glossary} ;