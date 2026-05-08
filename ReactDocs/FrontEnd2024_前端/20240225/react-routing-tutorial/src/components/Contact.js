import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Contact Page'                 
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title }</h1>
            </div>
        )
    }
}

