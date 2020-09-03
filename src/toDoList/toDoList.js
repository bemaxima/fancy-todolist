import React, { useState, useEffect } from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';

export default function ToDoList() {
    const [title, setTitle] = useState('');
    const [toDoList, setToDoList] = useState([
        {
            id: '1',
            title: 'Hit the gym',
            checked: false,
        },
        {
            id: '2',
            title: 'Pay bills',
            checked: true,
        },
        {
            id: '3',
            title: 'Meet George',
            checked: false,
        },
        {
            id: '4',
            title: 'Buy eggs',
            checked: false,
        },
        {
            id: '5',
            title: 'Read a book',
            checked: false,
        },
        {
            id: '6',
            title: 'Organize office',
            checked: false,
        },
    ]);

    function newElement() {
        setToDoList([
            ...toDoList,
            {
                id: Math.random().toString(),
                title,
                checked: false
            }
        ])
    }

    useEffect(() => {
        setTitle('');
    }, [toDoList])

    function handleEnter(e) {
        if (e.keyCode === 13) {
            newElement();
        }
    }
    useKeyboard('keydown', handleEnter, []);

    function handleTaskDone(id) {
        const taskIndex = toDoList.findIndex(task => task.id === id);
        const newTask = {
            ...toDoList[taskIndex],
            checked: !toDoList[taskIndex].checked,
        }
        const newToDoList = [...toDoList];
        newToDoList.splice(taskIndex, 1, newTask);
        setToDoList(newToDoList);
    }

    function handleTaskDelete(id, e) {
        e.stopPropagation();
        const taskIndex = toDoList.findIndex(task => task.id === id);
        const newToDoList = [...toDoList];
        newToDoList.splice(taskIndex, 1);
        setToDoList(newToDoList);
    }

    return (
        <div>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..."
                    value={title} onChange={e => setTitle(e.target.value)}
                />
                <span onClick={newElement} className="addBtn">Add</span>
            </div>

            <ul id="myUL">
                {toDoList.map(item => (                    
                    <li
                        key={item.id} className={item.checked ? 'checked' : ''} onClick={() => handleTaskDone(item.id)}
                    >
                        {item.title}
                        <span className='close' onClick={(e) => handleTaskDelete(item.id, e)} >×</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}