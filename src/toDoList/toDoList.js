import React from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';
import TaskList from './taskList';
import { reducer } from '../stateManager/reducer'
import { useDispatch, useSelector } from 'react-redux';
import { titleChanged, taskAdded, taskAddedWithLoading, taskDone, taskDeleted } from '../stateManager/actionCreator';

export default function ToDoList() {
    const dispatch = useDispatch(reducer);
    const { title, taskList, loading } = useSelector(state => state)

    function handleInputChange(title) {
        dispatch(titleChanged(title));
    }

    function newTask() {
        // dispatch(taskAdded());
        dispatch(taskAddedWithLoading());
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
                {loading ?
                <span className="addBtn loading">Please wait</span> :
                <span onClick={newTask} className="addBtn">Add</span>}
            </div>

            <TaskList taskList={taskList} onTaskDone={handleTaskDone} onTaskDelete={handleTaskDelete} />
        </div>
    )
}