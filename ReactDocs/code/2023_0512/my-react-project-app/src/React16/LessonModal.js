import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class LessonModal extends Component {

    render() {
        // 透過createPortal將元素render到指定的div裡
        // 修改 public/index.html
        return createPortal (
            <div>LessonModal</div>,
            document.getElementById('modal')
        );
    }
    
}

export default LessonModal;