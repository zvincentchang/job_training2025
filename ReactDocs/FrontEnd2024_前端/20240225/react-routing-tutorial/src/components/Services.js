import React, { Component } from 'react'

export default class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 title: "Services Page"
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title } </h1>
            </div>
        )
    }
}
