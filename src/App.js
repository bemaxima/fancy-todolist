import React, { Component } from "react";
import "./App.css";
import ToDoList from './toDoList/toDoList'
import { Provider } from 'react-redux'
import store from './stateManager/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoList />
      </Provider>
    )
  }
}

export default App;
