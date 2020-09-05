import React from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';
import TaskList from './taskList';
import { connect } from 'react-redux'
import { titleChanged, taskAdded, taskDone, taskDeleted } from '../stateManager/actionCreator';

function ToDoList({ title, taskList, onTitleChanged, onTaskAdded, onTaskDone, onTaskDeleted }) {

    function handleInputChange(title) {
        onTitleChanged(title);
    }

    function newTask() {
        onTaskAdded();
    }

    function handleEnter(e) {
        if (e.keyCode === 13) {
            newTask();
        }
    }
    useKeyboard('keydown', handleEnter, []);

    function handleTaskDone(id) {
        onTaskDone(id);
    }

    function handleTaskDelete(id, e) {
        e.stopPropagation();
        onTaskDeleted(id);
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

export default connect(
    state => state,
    dispatch => (
        {
            onTitleChanged: title => dispatch(titleChanged(title)),
            onTaskAdded: () => dispatch(taskAdded()),
            onTaskDone: (id) => dispatch(taskDone(id)),
            onTaskDeleted: (id) => dispatch(taskDeleted(id)),
        }
    )
)(ToDoList)