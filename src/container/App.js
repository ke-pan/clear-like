import React from 'react'
import NewTodo from '../components/NewTodo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(text) {
    console.log(text)
  }
  render() {
    return <div>
      <NewTodo onAddTodo={this.addTodo}/>
      Clear like todo
    </div>
  }
}
