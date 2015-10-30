import uuid from 'uuid'
import { ADD, UPDATE, DELETE, COMPLETE } from '../constants/ActionTypes'
import Immutable from 'immutable'

function findIndexById(state, id) {
  return state.findIndex(elem => elem.id === id)
}

const initialState = Immutable.List()

export default function todosReducer (state = initialState, action) {
  let index, todo
  switch (action.type) {
  case ADD:
    return state.push({
      id: uuid.v1(),
      text: action.text,
      completed: false
    })
    
  case UPDATE:
    index = findIndexById(state, action.id)
    todo = state[index]
    return state.splice(index, 1, {
      id: todo.id,
      text: action.text,
      completed: todo.completed
    })
    
  case DELETE:
    index = findIndexById(state, action.id)
    return state.delete(index)
    
  case COMPLETE:
    index = findIndexById(state, action.id)
    todo = state[index]
    return state.splice(index, 1, {
      id: todo.id,
      completed: !todo.completed
    })
  }
}