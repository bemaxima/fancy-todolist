import React from 'react'
import Task from './task'

export default function TaskList({ taskList, onTaskDone, onTaskDelete }) {

    return (
        <ul id="myUL">
            {taskList.map(item => (
                <Task key={item.id} {...item} onTaskDone={onTaskDone} onTaskDelete={onTaskDelete} />
            ))}
        </ul>
    )
}