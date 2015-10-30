import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import NewTodo from '../components/NewTodo'

class App extends React.Component {
  renderTodo(todos) {
    if (todos) {
      return todos.map(todo => todo.text)
    }
    return []
  }
  render() {
    const { todos, actions } = this.props;
    return <div>
      <NewTodo onAddTodo={actions.addTodo}/>
      Clear like todo
      { this.renderTodo(todos) }
    </div>
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
