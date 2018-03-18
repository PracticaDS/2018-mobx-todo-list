import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import TodoList from './components/TodoList'
import store from './store/TodoStore'

import './App.css'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TodoList mobX</h1>
        </header>
        <div className="App-intro">
          <TodoList store={store} />
        </div>
        <DevTools />
      </div>
    );
  }
}

export default App;
