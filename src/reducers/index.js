import uuid from 'uuid'
import { ADD, UPDATE, DELETE, COMPLETE } from '../constants/ActionTypes'
import Immutable from 'immutable'

function findIndexById(state, id) {
  return state.findIndex(elem => elem.id === id)
}

const initialState = Immutable.List()

export default function todosReducer (state = initialState, action) {
  switch (action.type) {
  case ADD:
    return state.push({
      id: uuid.v1(),
      text: action.text,
      completed: false
    })
    
  case UPDATE:
    const index = findIndexById(state, action.id)
    const todo = state[index]
    return state.splice(index, 1, {
      id: todo.id,
      text: action.text,
      completed: todo.completed
    })
    
  case DELETE:
    const index = findIndexById(state, action.id)
    return state.delete(index)
    
  case COMPLETE:
    const index = findIndexById(state, action.id)
    const todo = state[index]
    return state.splice(index, 1, {
      id: todo.id,
      completed: !todo.completed
    })
  }
}