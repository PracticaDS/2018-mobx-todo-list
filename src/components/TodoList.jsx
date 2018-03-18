import React from 'react'
import { observer } from 'mobx-react'

import TodoView from './TodoView'

@observer
export default class TodoList extends React.Component {
  render() {
    const store = this.props.store
    return (
      <div className="TodoList">
        { store.report }
        <ul>
        { store.todos.map(
          todo => <TodoView todo={ todo } key={ todo.id } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <div>Loading...</div> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}