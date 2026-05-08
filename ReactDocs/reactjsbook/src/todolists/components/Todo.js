import React from 'react'
import PropTypes from 'prop-types'//安装对应的包
const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
export default Todo