import React, { Component } from 'react';
import LessonModal from './LessonModal';

class Lesson extends Component {
    
    state = {
        detailVisible: false
    };

    showMore = () => {
        this.setState({
            detailVisible: !this.state.detailVisible
        });
    };

    render() {
        const {detailVisible} = this.state;
        return (
            <div>
                <button onClick={this.showMore}>
                    Show More
                </button>
                {detailVisible && <LessonModal/>}
            </div>
        );
    }
}

export default Lesson;