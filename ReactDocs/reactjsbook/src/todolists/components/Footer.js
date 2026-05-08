import React from 'react'
import {FilterLink} from "../containers/TodolistsContainer";
const Footer = () => (
    <p>

            显示待办事项情况:
            {' '}
            <FilterLink filter="SHOW_ALL">
                所有事项
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_ACTIVE">
                未办理事项
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_COMPLETED">
                已办结事项
            </FilterLink>

    </p>
)
export default Footer