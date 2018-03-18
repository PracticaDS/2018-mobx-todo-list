import React from 'react'
import { Popover } from 'antd'

/*
 * Abstract base class
 */
export default class EditPopover extends React.Component {
  state = {
    visible: false
  }
  setVisible = (visible) => {
    this.setState(prev => ({ ...prev, visible }))
  }
  hide = () => { this.setVisible(false) }
  handleVisibleChange = this.setVisible

  handleValueChanged = async (...args) => {
    await this.props.onChanged(...args)
    this.hide()
  }

  render() {
    return (
      <Popover
        content={this.renderPopContent()}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        {this.props.children}
      </Popover>
    )
  }

  renderPopContent() {
    throw new Error('subclass responsibility')
  }

}