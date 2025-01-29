import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>Welcome to {this.props.page}page</div>
    )
  }
}
