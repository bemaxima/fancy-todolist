import React, { useReducer } from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';
import TaskList from './taskList';
import { titleChanged, taskAdded, taskDone, taskDeleted } from '../stateManager/actionCreator'
import { INIT_STATE, reducer } from '../stateManager/reducer'

export default function ToDoList() {
    const [{ title, taskList }, dispatch] = useReducer(reducer, INIT_STATE);

    function handleInputChange(title) {
        dispatch(titleChanged(title));
    }

    function newTask() {
        dispatch(taskAdded(title));
    }

    function handleEnter(e) {
        if (e.keyCode === 13) {
            newTask();
        }
    }
    useKeyboard('keydown', handleEnter, []);

    function handleTaskDone(id) {
        dispatch(taskDone(id));
    }

    function handleTaskDelete(id, e) {
        e.stopPropagation();
        dispatch(taskDeleted(id));
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