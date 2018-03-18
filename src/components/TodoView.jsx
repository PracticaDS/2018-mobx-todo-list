import React from 'react'
import { observer } from 'mobx-react'
import EditTodoPopover from './EditTodoPopover'

@observer
export default class TodoView extends React.Component {
  render() {
    const todo = this.props.todo
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        <EditTodoPopover value={todo.task} onChanged={this.handleRename}>
        { todo.task }
        </EditTodoPopover>
      </li>
    )
  }

  onToggleCompleted = () => {
    const { todo } = this.props
    todo.completed = !todo.completed;
  }

  handleRename = value => {
    const { todo } = this.props
    todo.task = value
  }

  onRename = () => {
    const { todo } = this.props
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}