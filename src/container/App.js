import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

class App extends React.Component {
  render() {
    const { todos, actions } = this.props;
    return <div>
      <NewTodo onAddTodo={actions.addTodo}/>
      <TodoList todos={todos} />
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
