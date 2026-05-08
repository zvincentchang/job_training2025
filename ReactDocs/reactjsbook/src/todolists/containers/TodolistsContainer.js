import { connect } from 'react-redux'
import React from 'react'
import TodoList from "../components/TodoList";
import {addTodo, setVisibilityFilter, toggleTodo} from "../actions/Action";
import Link from "../components/Link";
//FilterLink
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
//VisibleTodoList
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}
const mapStateToProps2 = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps2 = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps2,
    mapDispatchToProps2
)(TodoList)
//AddTodo
let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <h1>React+Redux实现待办事项管理小工具</h1>
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    增加待办事件
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)
export   {FilterLink,VisibleTodoList,AddTodo }