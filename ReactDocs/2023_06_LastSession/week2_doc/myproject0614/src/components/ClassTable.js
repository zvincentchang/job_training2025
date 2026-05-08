import React, { Component } from 'react'
import ClassBody from './ClassBody'
import ClassHeader from './ClassHeader'
export default class ClassTable extends Component {
    render() {
        return (
            <div>
                <table border = "1">
                    <ClassHeader />
                    <ClassBody />
                </table>
            </div>
        )
    }
}
