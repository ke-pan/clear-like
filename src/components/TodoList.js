import React from 'react'

export default class TodoList extends React.Component {
  renderTodo(todos) {
    if (todos) {
      return todos.map(todo => <li> {todo.text} </li>)
    }
    return []
  }
  render() {
    return <div>
      <ul>
        {this.renderTodo(this.props.todos)}
      </ul>
    </div>
  }
}
