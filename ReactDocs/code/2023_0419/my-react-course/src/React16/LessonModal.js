import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class LessonModal extends Component {

    // render() { return <div>LessonModal</div> }

    render() {
        // 透過createPortal將元素render到指定的div裡
        return createPortal (
            <div>LessonModal</div>,
            document.getElementById('modal')
        );
    }
    
}

export default LessonModal;