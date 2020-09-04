import React from 'react'

export default function Task({ id, title, checked, onTaskDone, onTaskDelete }) {

    return (
        <li
            className={checked ? 'checked' : ''} onClick={() => onTaskDone(id)}
        >
            {title}
            <span className='close' onClick={(e) => onTaskDelete(id, e)} >×</span>
        </li>
    )
}