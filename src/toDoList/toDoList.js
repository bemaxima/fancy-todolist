import React from 'react'
import './toDoList.css'
import '../hooks/useKeyboard.js.js'
import { useKeyboard } from '../hooks/useKeyboard.js.js';
import TaskList from './taskList';
import { titleChanged, taskAdded, taskDone, taskDeleted } from '../stateManager/actionCreator'
import { connect } from 'react-redux'

function ToDoList({ title, taskList, onInputChange, onNewTask, onTaskDone, onTaskDelete }) {

    function handleInputChange(title) {
        onInputChange(title)
    }

    function newTask() {
        onNewTask()
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
        onTaskDelete(id);
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
    state => {
        return {
            title: state.title,
            taskList: state.taskList
        }
    },
    dispatch => {
        return {
            onInputChange: title => dispatch(titleChanged(title)),
            onNewTask: () => dispatch(taskAdded()),
            onTaskDone: id => dispatch(taskDone(id)),
            onTaskDelete: id => dispatch(taskDeleted(id)),
        }
    }
)(ToDoList)