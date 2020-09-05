import React from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';
import TaskList from './taskList';

export default function ToDoList() {
    // temprory data before using redux and INIT_DATA in reducer.js
    const title = '';
    const taskList = [
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
    ]

    function handleInputChange(title) {

    }

    function newTask() {

    }

    function handleEnter(e) {
        if (e.keyCode === 13) {
            newTask();
        }
    }
    useKeyboard('keydown', handleEnter, []);

    function handleTaskDone(id) {

    }

    function handleTaskDelete(id, e) {
        e.stopPropagation();

    }

    return (
        <div>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..."
                    value={title} onChange={e => handleInputChange(e.target.value)}
                />
                <span onClick={newTask} className="addBtn">Add</span>
            </div>

            <TaskList taskList={taskList} onTaskDone={handleTaskDone} onTaskDelete={handleTaskDelete} />
        </div>
    )
}