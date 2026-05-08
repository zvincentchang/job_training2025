import {Columns, Columns2, Columns3, Glossary, Table} from "./FragmentsExample";
import React from "react";
const items = [{
    id: 1,
    term: 'term1',
    description: 'desc1'
},
    {
        id: 2,
        term: 'term2',
        description: 'desc2'
    },
]
export default function HelloFragments() {
    return (
        <div>
            <h3>Fragments示例</h3>
            <Table/>
            <h3>Columns</h3>
            <Columns/>
            <h3>Columns2</h3>
            <Columns2/>
            <h3>Columns3</h3>
            <Columns3/>
            <h3>Glossary</h3>
            <Glossary items={items}/>
        </div>
    );
}