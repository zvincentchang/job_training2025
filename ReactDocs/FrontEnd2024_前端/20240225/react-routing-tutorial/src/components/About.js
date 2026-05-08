import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: 'About Page'            
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
export default About;

