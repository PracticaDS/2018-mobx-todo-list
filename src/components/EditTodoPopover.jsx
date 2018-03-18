import React from 'react'
import Popover from './Popover'
import { Input } from 'antd'

export default class EditTodoPopover extends Popover {
  
  handleChange = e => {
    const { value } = e.target
    this.setState({ value })
  }
  doIt = () => {
    this.handleValueChanged(this.state.value)
  }

  renderPopContent() {
    const { value } = this.props
    return (
      <Input placeholder={value} onChange={this.handleChange} onPressEnter={this.doIt} />
    )
  }

}