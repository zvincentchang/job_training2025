import React from 'react'
//import TableHeader from './TableHeader'
//import TableBody from './TableBody'
import ArrowBody from './ArrowBody'
import ArrowHeader  from './ArrowHeader'
const Table= () => {
    return (
        <div>
            <table border = "1">
                <ArrowHeader />
                <ArrowBody />
            </table>
        </div>
    )
}
export default Table;